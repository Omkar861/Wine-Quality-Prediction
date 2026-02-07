export class NormalSinUp{

    constructor(page){
        this.page =page;
        this.userName = page.locator("//input[@id='user-name']");
        this.password =page.locator("//input[@id='password']");
        this.btn =page.locator("//input[@id='login-button']")
    }

    async signUp(usrName , PassWord){

        await  this.userName.fill(usrName)
        await this.password.fill(PassWord)
        await this.btn.click()
    }
}