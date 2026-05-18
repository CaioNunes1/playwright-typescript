import test from "@playwright/test";
import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { expect } from "@playwright/test";
//import dateNow from "date-now";

test.beforeEach(async ({page})=>{
    const login = new Login(page);
    await login.goToLoginPage();
    await login.login('joao@email.com','testpassword' );
})

test("do a purchase" , async ({page})=>{
    //const login = new Login(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    // const timestamp = dateNow();

    await page.waitForTimeout(2000);
    //Homepage
    await homePage.isOnHomePage();

    await homePage.addProductToCart("Nexus 6");
    await homePage.goToCart();

    await cartPage.isOnCartPage();
    await cartPage.isProductInCart("Nexus 6");
    await cartPage.IsModalVisible();
    await cartPage.finishingPurchase();
    await cartPage.fillPurchaseForm("João", "Brasil", "São Paulo", "1234 5678 9012 3456", "12", "2025");
    await cartPage.confirmPurchase();
    await cartPage.pressOkButton();
    await homePage.isOnHomePage();
})