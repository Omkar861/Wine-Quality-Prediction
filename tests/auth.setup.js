import{test as setup} from '@playwright/test';
import { NormalSinUp } from '../Pages/NormalSingup';


const path = require('path');

// This mimics your first example's logic
const authFile = path.join(__dirname, '..', 'playwright', '.auth', 'user.json');

setup('authenticatio' , async ({page})=> {

    await page.goto("https://www.saucedemo.com/inventory.html")

    const signup = new NormalSinUp(page)

    await signup.signUp("standard_user", "secret_sauce");

    await page.waitForURL("https://www.saucedemo.com/inventory.html")

    await page.context().storageState({path: authFile})

})