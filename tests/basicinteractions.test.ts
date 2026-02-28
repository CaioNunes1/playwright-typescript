import test, { expect } from "@playwright/test";

test("basic interactions", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/inputs");
    const messageInput= page.locator("input[type='number']")
    console.log(await messageInput.getAttribute(""))
    console.log("Before entering data:" + await messageInput.inputValue());

    const headingCss = page.locator('h3:has-text("Inputs")')
    await expect(headingCss).toBeVisible();

    await page.fill("input[type='number']", "1234");
    console.log("After entering data:" + await messageInput.inputValue());
    await page.waitForTimeout(3000);

})

test("Interaction with inputs", async ({page}) =>{
    await page.goto("https://demoqa.com/automation-practice-form")
    const firstNameInput = page.locator("input#firstName")
    console.log("Before adding data ",await firstNameInput.inputValue());
    await firstNameInput.fill("John")
    console.log("After adding data",await firstNameInput.inputValue());
    expect(firstNameInput).toHaveValue("John");
})

test("Interaction with checkboxes", async({page})=>{
    await page.goto("https://demoqa.com/checkbox")
    const singleCheckbox = await page.locator("//span[@aria-label='Select Home']");

    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
    await page.goto("https://demoqa.com/text-box")
    await page.locator('input[type="text"]').fill("Johnn");
})