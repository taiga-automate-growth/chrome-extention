export class BackgroundMessage{
    /**
     * @type {string}
     */
    #extensionId = 'mbeejgjnnbgcbkdpikkfmincflchifpi';

    /**
     * @type {string}
     */
    #type;
    
    /**
     * @type {string}
     */
    #resource;

    /**
     * @type {string}
     */
    #action;

    /**
     * @constructor
     */
    constructor(type, resource, action){
        this.#type = type;
        this.#resource = resource;
        this.#action = action;
    }

    send(params = {}){
        const message = {
            type: this.#type,
            resource: this.#resource,
            action: this.#action
        }

        if(Object.keys(params).length > 0){
            message.params = params;
        }
        
        chrome.runtime.sendMessage(this.#extensionId, message)
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(error => {
            console.log(error);
            return error;
        });
    }
}