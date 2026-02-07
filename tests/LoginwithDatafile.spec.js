import{test, expect} from '@playwright/test'
import{baseURL} from'../config';

const data = require('../Data/Information.json')

test('LoginwithDatafile', async ({page})=>{

    await page.goto(baseURL);

    await page.getByPlaceholder("Username").fill(data.username);
    await page.getByPlaceholder("Password").fill(data.password);

    await page.locator("#login-button").click();



})