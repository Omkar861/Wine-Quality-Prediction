//import{expect} from '@playwright/test'
import{HomePG} from '../Pages/homePage1'
import{CartPage} from '../Pages/cartPage'
import {test, expect} from '../TestFixtures/Fitures'

const ItemValue = 1200;
test.describe(
    '@Tthis for testin purposr' , ()=>{


    test('Test Jeans value 1200 is visible or Not', async ({loginPage})=>{

    //let HomePage;
    let CartPg;
    await test.step('This is step 1', async ()=>{
        await loginPage.serachJens();
        await expect.soft(await loginPage.checkItem(ItemValue)).toHaveText(/1200/)
    });

    await test.step('This is step 2', async()=>{
         CartPg = await loginPage.AddItem(ItemValue)

        await expect.soft(await CartPg.varifyPdt()).toHaveText(/1200/);
    })

    // const  HomePage = new HomePG(page);
    // await HomePage.serachJens();


    // //Test -1
    // await expect.soft(await HomePage.checkItem(ItemValue)).toHaveText(/1200/)

    //Test-2
    // test.step('This is step 2', async({})=>{
    //     const CartPg = await HomePage.AddItem(ItemValue)

    //     await expect.soft(await CartPg.varifyPdt()).toHaveText(/1200/);
    // })
    // const CartPg = await HomePage.AddItem(ItemValue)

    // await expect.soft(await CartPg.varifyPdt()).toHaveText(/1200/);
})
    })