class GoogleApiClient{
　　 
	/**
     * @type {string}
     * @protected
     */
    token;
    
    /** 
     * @typedef {object} Parameters - HTTPリクエストパラメータ
     * @prop {string} method - リクエストメソッド
	 * @prop {boolean} async - 非同期通信設定
	 * @prop {object} headers - リクエストヘッダーオブジェクト
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
        chrome.identity.getAuthToken({interactive:true})
        .then(authTokenResult => {
            this.token = authTokenResult.token;
        })
        .catch(error => {throw error;});
        
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
}