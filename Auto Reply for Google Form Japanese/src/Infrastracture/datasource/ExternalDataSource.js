import { BrowserLocalStorage } from "./BrowserLocalStorage/BrowserLocalStorage.js";

export class ExternalDataSource{
    /** @type {Object} */
    #message;
    
    /** @type {Object} */
    #sender;
    
    /** @callback Response */
    /** @type {Response} */
    #response;

     /**
     * @constructor
     */
     constructor(message, sender, sendResponse){
        this.#message = message;
        this.#sender = sender;
        this.#response = sendResponse;
    }

    #generateDataSource(resource){
        if(resource === 'BrowserLocalStorage'){
            return new BrowserLocalStorage();
        }
    }
    
    access(){
        const dataSource = this.#generateDataSource(this.#message.resource);

        if(this.#message.action === 'getAutoReplySetting'){
            this.#response(dataSource.get('autoReplySetting'));

        }else if(this.#message.action === 'saveAutoReplySetting'){
            this.#response(dataSource.save(this.#message.data));
        }
    }
}