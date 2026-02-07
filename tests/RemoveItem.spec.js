import {test, expect} from '@playwright/test';

//import{NormalSinUp} from '../Pages/NormalSingup';
import{HomePage} from '../Pages/NormalHomePage';
import{CartPAge} from '../Pages/NormalCartPage';
 
test('Remove Item', async ({page})=>{

    await page.goto("https://www.saucedemo.com/inventory.html")

    //const LogIn = new NormalSinUp(page)

    //await LogIn.signUp("standard_user", "secret_sauce")

    const HomPg = new HomePage(page);

    await HomPg.CheckItem("Sauce Labs Backpack")
    
    const cartPg = new CartPAge(page);

    await cartPg.CheckforItem();



})