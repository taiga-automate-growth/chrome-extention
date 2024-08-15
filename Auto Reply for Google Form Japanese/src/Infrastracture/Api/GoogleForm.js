import { BackgroundMessage } from "../../Background/BackgroundMessage.js";

export class GoogleForm{
    /** @type {BackgroundMessage} */
    #backgroundMessage;

    constructor(backgroundMessage){
        this.#backgroundMessage = backgroundMessage;
    }

    async getQuestionTitles(formId){
        const params = {formId: formId};
        const form = await this.#backgroundMessage.send('getForm', params);
        return form.items.map(item => {return item.title});
    }
 
}