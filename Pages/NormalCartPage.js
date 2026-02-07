export class CartPAge{

    constructor(page){

        this.page = page;
        this.Removebtn = page.locator("//button[contains(text(),'Remove')]");

    }

    async CheckforItem(){

        const items = this.Removebtn

        if(items.isVisible()){

            await this.page.screenshot({ path: 'D:/Omkar/Playwrite/POM Practise -1/Screenshot/Image_2.png',  fullPage : true
        });

        console.log("Item found and here is screenshot")
        }else{
            console.log("Item not found");
        }

    }
}