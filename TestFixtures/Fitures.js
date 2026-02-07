import{test as base} from '@playwright/test'
import{HomePG} from '../Pages/homePage1';


export const test = base.extend({
    loginPage: async ({page},use)=> {

        await use(new HomePG(page));
    }
})

export {expect} from '@playwright/test'

//export default test