 export class LoginPage {


    constructor(page){
        this.page = page;
        this.Username = page.locator("//input[@id='username']");
        this.Password = page.locator("//input[@id='password']");
        this.Submit = page.locator("//button[@id='submit']");
    }

    async SignUp(usrNme , Pasword){
        await this.Username.fill(usrNme);
        await this.Password.fill(Pasword);
        await this.Submit.click();
        await this.page.waitForTimeout(5000);
    }

     verifyLogin(){

        return this.page.locator("//h1[normalize-space()='Logged In Successfully']");
    }
}