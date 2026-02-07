export class LoginMap{

    constructor(page){
        this.page =page;
        this.userName = page.locator("//input[@id='user-name']");
        this.password =page.locator("//input[@id='password']");
        this.btn =page.locator("//input[@id='login-button']")
    }


    async checkLogin(mapObject){
    
    for(let[key, value] of mapObject){
    await this.userName.fill(key);
    await this.password.fill(value);
    await this.btn.click();

    await this.page.waitForTimeout(3000);    

    const error =  this.page.locator("//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out')]")
    const dashboard =  this.page.locator("//div[@class='app_logo']")

    const isit = await error.isVisible();
    const dashboarderr = await dashboard.isVisible();

    if(isit){
        await this.page.locator("//input[@id='user-name']").clear()
        await this.page.locator("//input[@id='password']").clear()
        console.log(`this user ${key} can not have access with ${value}`)
    }
    else if(dashboarderr){
        await this.page.locator("//button[@id='react-burger-menu-btn']").click()
        await this.page.locator("//a[@id='logout_sidebar_link']").click()
        console.log(`this user ${key}  have access with ${value}`)

    }
    }
}
}