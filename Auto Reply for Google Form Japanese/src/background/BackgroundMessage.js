export class BackgroundMessage{
    /**
     * @type {string}
     */
    #extensionId;

    /**
     * @constructor
     */
    constructor(){
        this.#extensionId = 'mbeejgjnnbgcbkdpikkfmincflchifpi';
    }

    /**
     * Backgroundにメッセージを送信する
     * 
     * @param {'getForm'|'getAliases'|'createScript'|'updateScript'|'getAutoReplySetting'|'saveAutoReplySetting'} action - 実行する外部処理
     * @param {Object} params - 処理に渡すパラメータ
     * @return {Promise} 
     */
    send(action, params = {}){
        const message = {
            action: action
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