import { GoogleFormApiClient } from "../Clients/GoogleFormApiClient.js";
import { GmailApiClient } from "../Clients/GmailApiClient.js";
import { GoogleAppsScriptApiClient } from "../Clients/GoogleAppsScriptApiClient.js";

export class ApiRequester{

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
    constructor(message, sendResponse){
        this.#message = message;
        this.#response = sendResponse;
    }

	/**
	 * @param {string} apiName
	 * @return {GoogleApiClient}
	 */
    #generateApiClient(apiName){
        switch(apiName){
            case 'Google Form':
                return new GoogleFormApiClient();
                break;
            case 'Gmail':
                return new GmailApiClient();
                break;
            case 'Apps Script':
                return new GoogleAppsScriptApiClient();
                break;
            default:
                throw new ApiClientNotFoundException();
                break;
        }
    }
    
    /** */
    request(){
        
        const apiClient = this.#generateApiClient(this.#message.apiName);
            
        if(this.#message.action === 'getForm'){
            
	        this.#response(apiClient.getForm());
            
        }else if(this.#message.action === 'getAliases'){
        
	        this.#response(apiClient.getAlieses());
            
        }else if(this.#message.action === 'createScript'){
        
	        this.#response(apiClient.createScript());
	        
        }else if(this.#message.action === 'updateScript'){
        
	        this.#response(apiClient.updateScript());
        }
    }
}