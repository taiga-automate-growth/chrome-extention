class GmailApiClient extends GoogleApiClient{
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
     * @return {object} エイリアスオブジェクト
     */
    getAiliases(){
        this.parameter.method = 'GET';
        fetch(`${this.#baseUrl}/v1/users/me/settings/sendAs?key=${this.#apiKey}`,this.parameters)
        .then(response => response.json())
        .then(ailiases => {return ailiases})
        .catch(error => {throw error});
    }
}