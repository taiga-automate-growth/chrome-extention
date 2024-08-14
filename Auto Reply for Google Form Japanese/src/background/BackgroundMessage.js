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

    /**
     * 
     * @param {Object} params
     * @return {Promise} 
     */
    send(params = {}){
        const message = {
            type: this.#type,
            resource: this.#resource,
            action: this.#action
        }

        if(Object.keys(params).length > 0){
            message.params = params;
        }
        
        return new Promise((resolve,reject) => {

            chrome.runtime.sendMessage(this.#extensionId, message)
            .then(response => {
                console.log('バックグラウンドから取得したデータです');
                console.log(response);
                resolve(response);})
            .catch(error => {reject(error);});
        });
    
    }
}