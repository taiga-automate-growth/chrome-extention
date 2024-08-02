import { ExternalApi } from "../Api/Request/ExternalApi.js";
import { ExternalDataSource } from "../datasource/ExternalDataSource.js";

export class BackgroundMediator{
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

    /**
     * 
     */
    mediate(){
        if(this.#message.type === 'ApiRequest'){
            new ExternalApi(this.#message, this.#response).request();

        }else if(this.#message.type === 'dataSourceAccess'){

            new ExternalDataSource(this.#message, this.#response).access();
        }
    }
}