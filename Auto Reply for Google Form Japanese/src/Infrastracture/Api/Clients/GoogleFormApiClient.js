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
     * @return {Object} Googleフォームオブジェクト
     */
    getForm(formId){
        this.parameter.method = 'GET';
        fetch(`${this.#baseUrl}/v1/forms/${formId}?key=${this.#apiKey}`,this.parameters)
        .then(response => response.json())
        .then(json => {return json.form})
        .catch(error => {throw error});
    }
}