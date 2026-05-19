import test from "@playwright/test";

test("Dropdown tests", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu");
    //await page.locator("div[id='withOptGroup']").click()
    await page.selectOption("#oldSelectMenu","Red");
    await page.waitForTimeout(3000);

    await page.selectOption("#cars",["volvo","saab"]);
    await page.waitForTimeout(3000);
})
 