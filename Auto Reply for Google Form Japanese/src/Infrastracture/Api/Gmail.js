import { BackgroundMessage } from "../../Background/BackgroundMessage.js";

export class Gmail{
    /** @type {BackgroundMessage} */
    #backgroundMessage;

    constructor(backgroundMessage){
        this.#backgroundMessage = backgroundMessage;
    }

    async getAliases(){
        console.log(this.#backgroundMessage);
        const aliases = await this.#backgroundMessage.send('getAliases');
        return aliases.sendAs.map(alias => {return alias.sendAsEmail});
    }
}