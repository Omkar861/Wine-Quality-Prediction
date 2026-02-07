import {test as base} from '@playwright/test'


export const test = base.extend({

    loginPG : async ({page},use )=> {
        
        await page.goto("https://automationexercise.com/")

        await use(page);

    }
})

export {expect} from'@playwright/test'