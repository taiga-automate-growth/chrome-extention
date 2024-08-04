import { GoogleApiClient } from "./GoogleApiClient.js";

export class GmailApiClient extends GoogleApiClient{
    /** @type {string} */
	#baseUrl;
	
	/** @type {string} */
	#apiKey;
	
	/**
     * @constructor
     */
    constructor(){
        super();
        this.#baseUrl = 'https://gmail.googleapis.com/gmail';
        this.#apiKey = 'AIzaSyAsZolQRakQXuQOj_Ne7NlXOsrmapJYFWs';
    }

    /** 
     * @return {Promise}
     */
    getAliases(){
        this.parameter.method = 'GET';
        return new Promise((resolve,reject) =>{

            fetch(`${this.#baseUrl}/v1/users/me/settings/sendAs?key=${this.#apiKey}`,this.parameters)
            .then(response => response.json())
            .then(ailiases => resolve(ailiases))
            .catch(error => reject(error));
        });
    }
}