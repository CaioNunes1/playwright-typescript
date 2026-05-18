import { Page,Locator } from "@playwright/test";
import { expect } from "@playwright/test";
export class CartPage{
    readonly page: Page;
    readonly cartPage : Locator;
    readonly modal :Locator;
    readonly sweetAlert :Locator;

    constructor(page: Page){
        this.page = page;
        this.cartPage = page.locator('.col-lg-8');
        this.modal = page.locator('.modal-content');
        this.sweetAlert = page.locator('.sweet-alert.showSweetAlert.visible')
    }

    async isOnCartPage(): Promise<void>{
        await this.cartPage.isVisible();
    }
    async isProductInCart(productName: string): Promise<void> {
        const productRow = this.cartPage.locator('.success').filter({ hasText: productName }).first();
        await expect(productRow).toBeVisible();

        // ✅ Seletor correto para os links "Delete"
        const deleteLinks = this.page.locator('a:has-text("Delete")');
        const count = await deleteLinks.count();
        for (let i = 0; i < (count-1); i++) {
            await deleteLinks.nth(i).click();
            console.log(`Clicou no link de remoção ${i + 1}/${count}`);
            await this.page.waitForTimeout(500);
        }
    }
    async finishingPurchase(){
        await this.page.locator(".btn.btn-success").click();
    }

    async IsModalVisible(){
        await expect(this.modal.locator('#orderModalLabel')).toHaveText('Place order');
    }

    async fillPurchaseForm(name: string, country: string, city: string, card: string, month: string, year: string){
        await this.modal.locator('input[id="name"]').fill(name);
        await this.modal.locator('input[id="country"]').fill(country);
        await this.modal.locator('input[id="city"]').fill(city);
        await this.modal.locator('input[id="card"]').fill(card);
        await this.modal.locator('input[id="month"]').fill(month);
        await this.modal.locator('input[id="year"]').fill(year);
    }
    async confirmPurchase(){
        await this.page.getByRole('button', { name: 'Purchase' }).click();
    }

    async pressOkButton(){
        await this.sweetAlert.getByRole('button', {name: 'OK'}).click();
    }


}