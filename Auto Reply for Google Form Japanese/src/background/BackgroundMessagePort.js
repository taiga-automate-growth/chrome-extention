import { ApiClientNotFoundException } from "../Exceptions/ApiClientNotFoundException.js";
import { GmailApiClient } from "./Api/Clients/GmailApiClient.js";
import { GoogleAppsScriptApiClient } from "./Api/Clients/GoogleAppsScriptApiClient.js";
import { GoogleFormApiClient } from "./Api/Clients/GoogleFormApiClient.js";
import { BrowserLocalStorage } from "./dataSource/BrowserLocalStorage.js";

export class BackgroundMessagePort{
    /** @type {Object} */
    #message;
    
    /** @type {Object} */
    #sender;
    
    /** @callback Response */
    /** @type {Response} */
    #sendResponse;

    /**
     * @constructor
     */
    constructor(message, sender, sendResponse){
        this.#message = message;
        this.#sender = sender;
        this.#sendResponse = sendResponse;
    }

    async handle(){
        const action = this.#message.action;
        const params = this.#message.params;

        let externalServiceTaskResult;

        switch(action){
            case 'getForm':
                externalServiceTaskResult = await new GoogleFormApiClient().getForm(params.formId);
                break;

            case 'getAliases':
                externalServiceTaskResult = await new GmailApiClient().getAliases();
                break;

            case 'createScript':
                externalServiceTaskResult = await new GoogleAppsScriptApiClient().createScript(params.title, params.parentId);
                break;

            case 'updateScript':
                externalServiceTaskResult = await new GoogleAppsScriptApiClient().updateScript(params.scriptId, params.files);
                break;
           
            case 'getAutoReplySetting':
                externalServiceTaskResult = await new BrowserLocalStorage().get(params.key);
                break;

            case 'saveAutoReplySetting':
                externalServiceTaskResult = await new BrowserLocalStorage().set(params.data);
                break;

            default:
                throw new ApiClientNotFoundException('外部サービスが見つかりませんでした');
        }

        this.#sendResponse(externalServiceTaskResult);
        
    }
}