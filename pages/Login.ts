import { Page } from "@playwright/test";

export class Login{

    private page:Page;
    private loginLink;
    private loginInput;
    private passwordInput;
    private loginButton;
    constructor( page: Page){
        this.page = page;
        this.loginLink = page.locator('#login2');
        this.loginInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    async goToLoginPage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async login(username:string, password:string){
        await this.loginLink.click();
        await this.loginInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}