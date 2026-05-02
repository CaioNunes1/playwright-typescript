import { Page,Locator } from "@playwright/test";

export class HomePage{
    private page:Page;
    private isOnHomePageLocator:Locator;
    private productsList:Locator;
    private cartButton: Locator;
    private addToCartButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.isOnHomePageLocator = page.locator('.col-lg-9');
        this.productsList = page.locator('#tbodyid');
        this.cartButton = page.locator('#cartur');
        this.addToCartButton = page.locator('a:has-text("Add to cart")');
        
    }
    async isOnHomePage(): Promise<void>{
        await this.isOnHomePageLocator.isVisible();
        await this.productsList.isVisible();
    }

    async addProductToCart(productName: string) {
        // Aguarda a lista de produtos carregar
        await this.productsList.waitFor({ state: 'visible' });

        // Obtém todas as divs de produto (cada item da grid)
        const productDivs = await this.productsList
            .locator('.col-lg-4.col-md-6.mb-4')
            .elementHandles();

        let produtoEncontrado = false;

        for (const productDiv of productDivs) {
            // Dentro de cada produto, procura o link que contém o nome
            const nomeLink = await productDiv.$('.hrefch, .card-title a');
            if (!nomeLink) continue;

            const text = (await nomeLink.textContent())?.trim() || '';
            console.log(`Comparando: "${text}" com "${productName}"`);

            if (text && text.toLowerCase() === productName.toLowerCase()) {
                // Clica no link do produto (ou na div inteira – depende do comportamento desejado)
                await nomeLink.click();
                produtoEncontrado = true;
                break;
            }
        }

        if (!produtoEncontrado) {
            console.error(`Produto "${productName}" não encontrado.`);
            return;
        }

        // Listener do diálogo (adicionado ao carrinho)
        this.page.once('dialog', async dialog => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            }
        });

        // Clica no botão "Add to cart" da página do produto
        await this.addToCartButton.waitFor({ state: 'visible' });
        await this.addToCartButton.click();
}

    async goToCart(){
        await this.cartButton.click();
    }
}