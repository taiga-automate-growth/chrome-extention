import { GoogleFormApiClient } from "../Clients/GoogleFormApiClient.js";
import { GmailApiClient } from "../Clients/GmailApiClient.js";
import { GoogleAppsScriptApiClient } from "../Clients/GoogleAppsScriptApiClient.js";
import { GoogleApiClient } from "../Clients/GoogleApiClient.js";
import { ApiClientNotFoundException } from "../../../Exceptions/ApiClientNotFoundException.js";

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
        console.log(message);
    }

	/**
	 * @param {string} apiName
	 * @return {GoogleApiClient}
	 */
    #generateApiClient(apiName){
        switch(apiName){
            case 'Google Form':
            case 'form':
            case 'Form':
                return new GoogleFormApiClient();
                break;
            case 'Gmail':
            case 'gmail':
                return new GmailApiClient();
                break;
            case 'Apps Script':
            case 'Google Apps Script':
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
        console.log('外部APIにリクエストを送ります')
        const apiClient = this.#generateApiClient(this.#apiName);
        console.log(apiClient);
        if(this.#action === 'getForm'){
            console.log('フォームを取得します');
            return new Promise((resolve, reject) => {
                apiClient.getForm(this.#params.formId)
                .then(form => {
                    console.log('フォームを取得しました');
                    console.log(form);
                    resolve(form)
                })
                .catch(error => {
                    console.log('フォームの取得に失敗しました');
                    console.log(error);
                    reject(error)
                });
            });
            
        }else if(this.#action === 'getAliases'){
            console.log('エイリアスを取得します');
            return new Promise((resolve,reject) =>{
                apiClient.getAliases()
                .then(aliases => {
                    console.log('エイリアスを取得しました');
                    console.log(aliases);
                    resolve(aliases)})
                .catch(error => {
                    console.log('エイリアスの取得に失敗しました');
                    reject(error)});
            });

        }else if(this.#action === 'createScript'){

            console.log('スクリプトを作ります');
            return new Promise((resolve,reject) =>{
                apiClient.createScript(this.#params.title, this.#params.parentId)
                .then(project => resolve(project))
                .catch(error => reject(error));
            });
	        
        }else if(this.#action === 'updateScript'){
        
            console.log('スクリプトを更新します');
            return new Promise((resolve,reject) =>{
                apiClient.updateScript(this.#params.scriptId, this.#params.files)
                .then(project => resolve(project))
                .catch(error => reject(error));
            });
        }
    }
}