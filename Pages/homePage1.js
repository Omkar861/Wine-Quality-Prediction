import {BasePage} from '../Pages/BasePage';
import {CartPage} from'../Pages/cartPage';

export class HomePG extends BasePage {

    constructor(page){
        super(page);
        this.page = page;
        this.jens = page.locator("//a[normalize-space()='Men']");
        this.jensItem = page.locator("//div[@class='features_items']//div[@class='col-sm-4']")
        this.viewCart =page.locator("//p[@class='text-center']//a")
        
    }

    async  serachJens(){
        await super.OpenApp()
        await this.jens.click();
        await this.page.getByRole('link', { name: 'Jeans' }).click();
        await this.page.waitForLoadState();
    }

    async checkItem(ItemValue){

        return  this.jensItem.filter({hasText : ItemValue}).locator("//div[@class='productinfo text-center']//h2");
    }

     async AddItem(ItemValue){
    
        const prodt = await this.jensItem.filter({hasText : ItemValue}).locator("//a[@class='btn btn-default add-to-cart']").first();
       // await prodt.hover();
        await prodt.click();
        await this.viewCart.click();
        return new CartPage(this.page);
     }


}