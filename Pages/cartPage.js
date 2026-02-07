
export class CartPage{


    constructor(page){
        this.page =page

    }

    async varifyPdt(){

        return await this.page.locator("//td[@class='cart_price']//p[contains(text(),'Rs. 1200')]")
    }
}