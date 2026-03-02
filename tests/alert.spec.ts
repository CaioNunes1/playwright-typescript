import test, {expect} from "@playwright/test";

test("handling alerts", async ({page}) =>{
    await page.goto('https://demoqa.com/alerts')

    page.on('dialog',async (alert)=>{
        const text = alert.message();
        console.log(text);
        await alert.accept();
    })

    const firstAlertButton = page.locator("button[id='confirmButton']");
    await firstAlertButton.click();
    expect(page.locator('span[id="confirmResult"]')).toHaveText("You selected Ok");

    await page.waitForTimeout(3000);
    
})