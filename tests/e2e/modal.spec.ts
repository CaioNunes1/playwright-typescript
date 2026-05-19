import test from "@playwright/test";

test("Modal testing", async ({page}) =>{
    await page.goto("https://demoqa.com/modal-dialogs")
    await page.locator("button[id='showSmallModal']").click();

    await page.waitForTimeout(3000);
    await page.locator("button[id='closeSmallModal']").click();
    await page.waitForTimeout(3000);

    await page.locator("button[id='showLargeModal']").click();
    await page.waitForTimeout(3000);
    await page.locator("button[id='closeLargeModal']").click();
    await page.waitForTimeout(3000);
})