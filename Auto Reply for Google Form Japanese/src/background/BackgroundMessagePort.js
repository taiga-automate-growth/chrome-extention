import { ExternalApi } from "./Api/ExternalApi.js";
import { ExternalDataSource } from "./dataSource/ExternalDataSource.js";

export class BackgroundMessagePort{
    /** @type {Object} */
    #message;
    
    /** @type {Object} */
    #sender;
    
    /** @callback Response */
    /** @type {Response} */
    #sendResponse;

    /**
     * @constructor
     */
    constructor(message, sender, sendResponse){
        this.#message = message;
        this.#sender = sender;
        this.#sendResponse = sendResponse;
    }

    /**
     * 
     */
    sort(){
        console.log('メッセージ仕分け開始');
        console.log(this.#message);
        if(this.#message.type === 'ApiRequest'){
            new ExternalApi(this.#message).request()
            .then(result => {
                console.log('外部APIへのリクエスト結果です');
                console.log(result);
                this.#sendResponse(result)})
            .catch(error => this.#sendResponse(error));

        }else if(this.#message.type === 'dataSourceAccess'){
            new ExternalDataSource(this.#message).access()
            .then(result => {
                console.log('外部データソースから取得したデータです')
                console.log(result);
                this.#sendResponse(result)})
            .catch(error => this.#sendResponse(error));
        }
    }
}