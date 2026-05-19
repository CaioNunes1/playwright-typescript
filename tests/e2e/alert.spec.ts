import test, {expect} from "@playwright/test";

test("handling alerts", async ({page}) =>{
    await page.goto('https://demoqa.com/alerts')

    page.on('dialog',async (alert)=>{
        //const text = alert.message();
        const text = alert.defaultValue();
        console.log(text);
        await alert.accept("joao");
    })

    //const firstAlertButton = page.locator("button[id='confirmButton']");
    const firstAlertButton = page.locator("button[id='promtButton']");
    await firstAlertButton.click();
    //expect(page.locator('span[id="confirmResult"]')).toHaveText("You selected Ok");
    expect(page.locator('span[id="promptResult"]')).toHaveText("You entered joao");

    await page.waitForTimeout(3000);
    
})