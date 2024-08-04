import { GoogleApiClient } from "./GoogleApiClient.js";

export class GoogleFormApiClient extends GoogleApiClient{
    
    /** @type {string} */
	#baseUrl;
	
	/** @type {string} */
	#apiKey;
    
    /**
     * @constructor
     */
    constructor(){
        super();
        this.#baseUrl = 'https://forms.googleapis.com/';
        this.#apiKey = 'AIzaSyC3bcvnfuWfXFr0xyJG-UHLsvar6dnhT1A';
    }

    /** 
     * @param {string} formId GoogleフォームのID
     * @return {Promise} 
     */
    getForm(formId){
        this.parameter.method = 'GET';
        return new Promise((resolve,reject) => {

            fetch(`${this.#baseUrl}/v1/forms/${formId}?key=${this.#apiKey}`,this.parameters)
            .then(response => response.json())
            .then(json => resolve(json.form))
            .catch(error => reject(error));
        });
    }
}