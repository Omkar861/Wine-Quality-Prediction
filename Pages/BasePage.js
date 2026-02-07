import{baseURL} from '../config'

export class  BasePage{

    constructor(page){
        this.page = page;
    }


    async OpenApp(){

        await this.page.goto(baseURL);
    }


}