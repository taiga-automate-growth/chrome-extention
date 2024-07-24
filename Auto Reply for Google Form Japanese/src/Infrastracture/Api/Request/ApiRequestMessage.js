class ApiRequestMessage{
    /** @type {string} */
    #apiName;
    
    /** @type {string} */
    #requestDetail
    
    /** 
     * @constructor
     * @param {string} apiName
     * @param {string} requestDetail
     */
    constructor(apiName, requestDetail){
        this.#apiName = apiName;
        this.#requestDetail = requestDetail
    }

    /**
     * @param {Object} params
     * @return {Object} 
     */
    send(params = {}){
        const message = {
            apiName: this.#apiName,
            requestDetail: this.#requestDetail
        }
        if(Object.keys(params).length > 0){
            message.params = params;
        }
        chrome.runtime.sendMessage(message)
        .then(response => {return response;})
        .catch(error => {return error;})
    }
}