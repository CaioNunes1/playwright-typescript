import { Page } from "@playwright/test";

export class SignUp{
    private page:Page;
    private signUpLink;
    private signUpInput;
    private passwordInput;
    private signUpButton;
    
    constructor(page:Page){
        this.page = page;
        this.signUpLink = page.locator('#signin2');
        this.signUpInput=page.locator('#sign-username');
        this.passwordInput = page.locator('#sign-password');
        this.signUpButton = page.locator('.btn.btn-primary');
    }

    async goToSignUpPage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async signUp(username:string, password:string){
        await this.signUpLink.click();
        await this.signUpInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signUpButton.click();
    }
}