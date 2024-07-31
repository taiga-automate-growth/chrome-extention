export class ApiRequestMessage{
    /** @type {string} */
    #apiName;
    
    /** @type {string} */
    #action
    
    /** 
     * @constructor
     * @param {string} apiName
     * @param {string} action
     */
    constructor(apiName, action){
        this.#apiName = apiName;
        this.#action = action
    }

    /**
     * @param {Object} params
     * @return {Object} 
     */
    send(params = {}){
        const message = {
            apiName: this.#apiName,
            action: this.#action
        }
        if(Object.keys(params).length > 0){
            message.params = params;
        }
        chrome.runtime.sendMessage(message)
        .then(response => {return response;})
        .catch(error => {return error;})
    }
}