import { GoogleFormApiClient } from "../Clients/GoogleFormApiClient.js";
import { GmailApiClient } from "../Clients/GmailApiClient.js";
import { GoogleAppsScriptApiClient } from "../Clients/GoogleAppsScriptApiClient.js";
import { GoogleApiClient } from "../Clients/GoogleApiClient.js";

export class ExternalApi{

    /** @type {string} */
    #apiName;

    /** @type {string} */
    #action;

    /** @type {object} */
    #params;

    /**
     * @constructor
     */
    constructor(message){
        this.#apiName = message.resource;
        this.#action = message.action;
        this.#params = message.params ?? {};
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
    
    /** 
     * @return {Promise}
     */
    request(){
        
        const apiClient = this.#generateApiClient(this.#apiName);

        if(this.#action === 'getForm'){
            
            return new Promise((resolve, reject) => {
                apiClient.getForm()
                .then(form => resolve(form))
                .catch(error => reject(error));
            });
            
        }else if(this.#action === 'getAliases'){

            return new Promise((resolve,reject) =>{
                apiClient.getAlieses()
                .then(aliases => resolve(aliases))
                .catch(error => reject(error));
            });

        }else if(this.#action === 'createScript'){
            
            return new Promise((resolve,reject) =>{
                apiClient.createScript(this.#params.title, this.#params.scriptId)
                .then(project => resolve(project))
                .catch(error => reject(error));
            });
	        
        }else if(this.#action === 'updateScript'){
        
            return new Promise((resolve,reject) =>{
                apiClient.updateScript(this.#params.scriptId, this.#params.files)
                .then(project => resolve(project))
                .catch(error => reject(error));
            });
        }
    }
}