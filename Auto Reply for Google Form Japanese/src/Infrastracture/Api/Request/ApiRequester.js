class ApiRequester{

    /** @type {Object} */
    #message;
    
    /** @type {Object} */
    #sender;
    
    /** @callback Response */
    /** @type {Response} */
    #response;

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
                return new AppsScriptApiClient();
                break;
            default:
                throw new ApiClientNotFoundException();
                break;
        }
    }
    
    /** */
    request(){
        
        const apiClient = this.#generateApiClient(this.#message.apiName);
            
        if(this.#message.requestDetail === 'getForm'){
            
	        this.#response(apiClient.getForm());
            
        }else if(this.#message.requestDetail === 'getAliases'){
        
	        this.#response(apiClient.getAlieses());
            
        }else if(this.#message.requestDetail === 'createScript'){
        
	        this.#response(apiClient.createScript());
	        
        }else if(this.#message.requestDetail === 'updateScript'){
        
	        this.#response(apiClient.updateScript());
        }
    }
}