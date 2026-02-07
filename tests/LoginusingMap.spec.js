import {test, expect} from '@playwright/test'

import{LoginMap} from '../Pages/SignUpMap'

test('Login using Map', async ({page}) => {

    await page.goto("https://www.saucedemo.com/")

    
    const loginIds = new Map()
    loginIds.set("standard_user", "secret_sauce")
    loginIds.set("locked_out_user", "secret_sauce")
    loginIds.set("problem_user", "secret_sauce")
    loginIds.set("performance_glitch_user", "secret_sauce")
    loginIds.set("error_user", "secret_sauce")
    loginIds.set("visual_user", "secret_sauce")

    const varify = new LoginMap(page);

    await varify.checkLogin(loginIds);

    // for(let[key, value] of loginIds){
    // await page.locator("//input[@id='user-name']").fill(key)
    // await page.locator("//input[@id='password']").fill(value)
    // await page.locator("//input[@id='login-button']").click()

    // //For error handling
    // const error = await page.locator("//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out')]")
    // const isit = await error.isVisible();
    
    // //For correct login
    // const orit = await page.locator("//div[@class='app_logo']").isVisible();

    

    // if(isit == true){
    //     //console.log("This user can not enter in website");
    //     await page.locator("//input[@id='user-name']").clear()
    //     await page.locator("//input[@id='password']").clear()
    //     console.log(`this user ${key} can not have access with ${value}`)
    //     }

    // if( orit == true){
    //     //console.log("This user can enter in website");
        
    //     await page.locator("//button[@id='react-burger-menu-btn']").click()
    //     await page.locator("//a[@id='logout_sidebar_link']").click()
    //     console.log(`this user ${key}  have access with ${value}`)
        
    // }
    
}
)