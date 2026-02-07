export class HomePage{

    constructor(page){

        this.page =page;
        this.produts = page.locator(".inventory_item")

    }


    async CheckItem(ItemName){
        let ProductName = await this.produts.all();

        for(let i of ProductName){

            let a =  await i.locator(".inventory_item_name").textContent()

            if(a.includes(ItemName) ){
                await i.locator("//button").click();
            }
        }

        await this.page.locator(".shopping_cart_link").click();
    }
}