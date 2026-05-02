import test from "@playwright/test";
import { Login } from "../pages/Login";
//import dateNow from "date-now";

test("login test" , async ({page})=>{
    const login = new Login(page);
    // const timestamp = dateNow();
    await login.goToLoginPage();
    await login.login('joao@email.com','password' );
})