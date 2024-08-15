import { BackgroundMessage } from "../../Background/BackgroundMessage.js";

export class AppsScript{
    /** @type {BackgroundMessage} */
    #backgroundMessage;

    constructor(backgroundMessage){
        this.#backgroundMessage = new BackgroundMessage();
    }

    async create(title, parentId){
        const params = {title: title, parentId: parentId};
        const project = await this.#backgroundMessage.send('createScript',params);
        return project;
    }

    async update(scriptId, files){
        const params = {scriptId: scriptId, files: files};
        const project = await this.#backgroundMessage.send('updateScript',params);
        return project;
    }
}