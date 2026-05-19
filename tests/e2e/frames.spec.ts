import test from "@playwright/test";

test("Frame test", async ({page})=>{
    await page.goto("https://letcode.in/frame");
    const allFrames= page.frames();
    console.log("Number of frames "+ allFrames.length)

    const myFrame = page.frame("firstFr")
    // if(myFrame != null){
    //     await myFrame.fill("aa","aa")
    // }
    await myFrame?.fill("input[name='fname']","Joao")
    await myFrame?.fill("input[name='lname']","Gomes")

    expect(page.locator("/html/body/app-root/app-frame-content/div/div/div[1]/p")).toHaveText("You have entered joao gomes")
    await page.waitForTimeout(2000);
})