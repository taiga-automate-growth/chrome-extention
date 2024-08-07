import { BrowserLocalStorage } from "./BrowserLocalStorage/BrowserLocalStorage.js";

export class ExternalDataSource{

    /** @type {string} */
    #dataSource;

    /** @type {string} */
    #action;

    /** @type {object} */
    #params;

     /**
     * @constructor
     */
     constructor(message){
        this.#dataSource = message.resource;
        this.#action = message.action;
        this.#params = message.params ?? {};
    }

    #generateDataSource(dataSource){
        if(dataSource === 'BrowserLocalStorage'){
            return new BrowserLocalStorage();
        }
    }
    
    /**
     *  @return {Promise}
     */
    access(){
        console.log('外部データソースへアクセス開始');
        console.log(this);
        const dataSource = this.#generateDataSource(this.#dataSource);

        if(this.#action === 'getAutoReplySetting'){

            return new Promise((resolve,reject) => {
                dataSource.get('auto-reply-google-form-for-japanese')
                .then(savedData => {
                    console.log('ローカルストレージから取得したデータです');
                    console.log(savedData);
                    resolve(savedData)})
                .catch(error => {reject(error)});
            });

        }else if(this.#action === 'saveAutoReplySetting'){
            return new Promise((resolve,reject) => {
                dataSource.save(this.#params.data)
                .then(result => {resolve(result)})
                .catch(error => reject(error));
            });
        }
    }
}