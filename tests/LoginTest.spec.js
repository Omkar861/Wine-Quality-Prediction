import {test,expect} from '@playwright/test'

import{LoginPage} from '../Pages/SignUp'

test('Login with valid' , async ({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    const sign = new LoginPage(page);
    await sign.SignUp("student","Password123");

    await expect(sign.verifyLogin()).toContainText("Logged In Successfully");



     

//     await page.locator("//input[@id='username']").fill("student");

//     await page.locator("//input[@id='password']").fill("Password123");

//     await page.locator("//button[@id='submit']").click();

//     await page.waitForTimeout(5000);

//    // const text = await page.locator("//h1[normalize-space()='Logged In Successfully']");

//     await expect(page.locator("//h1[normalize-space()='Logged In Successfully']")).toContainText("Logged In Successfully");
})