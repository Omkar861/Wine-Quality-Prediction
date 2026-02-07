import{test,expect} from '@playwright/test'
import path from 'path';
const xlsx = require('xlsx')

test.use({ storageState: { cookies: [], origins: [] } });

test('Excel data', async ({page})=>{

    const filePath = path.join('./TestData/TestData.xlsx');
    const workbook = xlsx.readFile(filePath);

    //Select the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    //Convert data to json
    const data = xlsx.utils.sheet_to_json(sheet);

    for(let users of data){
    await page.goto("https://www.saucedemo.com/")
    await page.locator("//input[@id='user-name']").fill(users.UserName);
    await page.locator("//input[@id='password']").fill(users.Password);
    await page.locator("//input[@id='login-button']").click()

    //For error handling
    const error = await page.locator("//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out')]")
    const isit = await error.isVisible();
    
    //For correct login
    const orit = await page.locator("//div[@class='app_logo']").isVisible();

    

    if(isit){
        //console.log("This user can not enter in website");
        await page.locator("//input[@id='user-name']").clear()
        await page.locator("//input[@id='password']").clear()
        console.log(`this user ${users.UserName} can not have access with ${users.Password}`)
        }

    if( orit == true){
        //console.log("This user can enter in website");
        
        await page.locator("//button[@id='react-burger-menu-btn']").click()
        await page.locator("//a[@id='logout_sidebar_link']").click()
        console.log(`this user ${users.UserName}  have access with ${users.Password}`)
        
    

    }


}
})