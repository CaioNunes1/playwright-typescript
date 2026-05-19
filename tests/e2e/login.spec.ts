import {test,expect,Browser,Page} from "@playwright/test"
import { webkit,chromium,firefox } from "@playwright/test"

test('login test', async ()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()//uma tab, se quiser criar outra
    await page.goto('https://ecommerce-playground.lambdatest.io/')

    await page.locator('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span').nth(0).click()
    //await page.locator('//*[@id="widget-navbar-217834"]/ul/li[6]/ul/li[1]/a/div/span').click()

    await page.fill("input[name='email']",'gabriel@lambdatest.com')
    await page.fill("input[name='password']",'Test@123')
    //
    await page.waitForTimeout(2000)

    await page.locator('//*[@id="content"]/div/div[2]/div/div/form/input[1]').click();

    await page.waitForTimeout(2000)
    
    await page.locator("text='Continue'").click()

    await page.waitForTimeout(4000)

    
    const newContext = await browser.newContext()

    const newPage= await newContext.newPage()
    await newPage.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account')

    await page.waitForTimeout(5000)
})  