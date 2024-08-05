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
    async getForm(formId){
        console.log(formId);
        console.log('フォームAPIにGETリクエストを送ります');
        await this.getAuthToken();
        console.log(this.token);
        return new Promise((resolve,reject) => {

            fetch(`${this.#baseUrl}/v1/forms/${formId}?key=${this.#apiKey}`,{
                method: 'GET',
                headers: {
                    Authorization:'Bearer ' + this.token,
                    'Content-Type':'application/json'
                },
                'contentType': 'json'
            })
            .then(response => {
                console.log(response);
                return response.json()
            })
            .then(form => {
                console.log(form);
                resolve(form)})
            .catch(error => {
                console.log(error);
                reject(error)
            });
        });
    }
}