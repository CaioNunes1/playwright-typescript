import test from "@playwright/test";
import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
//import dateNow from "date-now";

test("login test" , async ({page})=>{
    const login = new Login(page);
    const homePage = new HomePage(page);
    // const timestamp = dateNow();
    await login.goToLoginPage();
    await login.login('joao@email.com','testpassword' );

    await page.waitForTimeout(2000);
    //Homepage
    await homePage.isOnHomePage();

    await homePage.addProductToCart("Nexus 6");
    await homePage.goToCart();

})