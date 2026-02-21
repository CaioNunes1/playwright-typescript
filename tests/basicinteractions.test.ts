import test, { expect } from "@playwright/test";

test("basic interactions", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/inputs");
    const messageInput= page.locator("input[type='number']")
    console.log(await messageInput.getAttribute(""))

    const headingCss = page.locator('h3:has-text("Inputs")')
    await expect(headingCss).toBeVisible();

    await page.fill("input[type='number']", "1234");
    await page.waitForTimeout(3000);

})  