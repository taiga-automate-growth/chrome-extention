import { BackgroundMessage } from "../../Background/BackgroundMessage.js";

export class Gmail{
    /** @type {BackgroundMessage} */
    #backgroundMessage;

    constructor(backgroundMessage){
        this.#backgroundMessage = backgroundMessage;
    }

    async getAliases(){
        const aliases = await this.#backgroundMessage.send('getAliases');
        return aliases.sendAs.map(alias => {return alias.sendAsEmail});
    }
}