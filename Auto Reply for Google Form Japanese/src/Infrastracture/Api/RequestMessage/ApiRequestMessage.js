class ApiRequestMessage{
    #apiName;
    #event;
    constructor(apiName, event){
        this.#apiName = apiName;
        this.#event = event
    }

    send(params = {}){
        const message = {
            apiName: this.#apiName,
            event: this.#event
        }
        if(Object.keys(params).length > 0){
            message.params = params;
        }
        chrome.runtime.sendMessage(message)
        .then(response => {return response;})
        .catch(error => {return error;})
    }
}