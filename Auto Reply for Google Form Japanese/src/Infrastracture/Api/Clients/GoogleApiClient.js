export class GoogleApiClient{ 
	/**
     * @type {string}
     * @protected
     */
    token;
    
    /** 
     * @typedef {Object} Parameters - HTTPリクエストパラメータ
     * @prop {string} method - リクエストメソッド
	 * @prop {boolean} async - 非同期通信設定
	 * @prop {Object} headers - リクエストヘッダーオブジェクト
	 * @prop {string} contentType - コンテンツの形式
     */
     
    /**
     * @protected
     * @type {Parameters}
     */
    parameters;

    /**
     * @constructor
     */
    constructor(){
        this.parameters = {
            method: 'GET',
            async: true,
            headers: {
                Authorization:'Bearer ' + this.token,
                'Content-Type':'application/json'
            },
            'contentType': 'json'
        }
    }

    /**
     * @protected
     * @return {Promise}
     */
    getAuthToken(){
        return new Promise((resolve,reject) => {
            chrome.identity.getAuthToken({interactive:true})
            .then(authTokenResult => {
                this.token = authTokenResult.token;
                resolve('成功');
            })
            .catch(error => {
                console.log(error);
                reject(error);
            });
        });
    }
}