import { AutoReplySetting } from "../../../Domain/Models/AutoReplySetting.js";
import { DataNotFoundException } from "../../../Exceptions/DataNotFoundException.js";
import { BackgroundMessage } from "../../../Background/BackgroundMessage.js";

export class BrowserLocalStorageAutoReplySettingRepository{

    /** @type {string} */
    #key;

    constructor(){
        this.#key = 'auto-reply-google-form-for-japanese';
    }
    /**
     * 復元
     * 
     * @param {string} formId - GoogleフォームのID
     * @return {Promise} 自動返信設定インスタンス 
     */
    async findByFormId(formId){
        console.log(formId);
        const allDatas = await new BackgroundMessage().send('getAutoReplySetting',{key: this.#key});
        const settingData = allDatas[this.#key][formId];
        console.log(settingData);

        if(settingData === undefined || settingData === null || Object.keys(settingData).length === 0) {
            throw new DataNotFoundException('このフォームに関する情報は保存されていません');
        }
        return new AutoReplySetting(settingData);
    }

    /**
     * 永続化
     * 
     * @param {AutoReplySetting} autoReplySetting - 自動返信設定インスタンス
     * @return {Promise}
     */
    save(autoReplySetting){
        console.log(autoReplySetting);
        const formId = autoReplySetting.getFormId();
        console.log('今から保存するデータのフォームIDです');
        console.log(formId);
        const saveData = autoReplySetting.getAsObject();

        new BackgroundMessage()
        .send('getAutoReplySetting',{key: this.#key})
        .then(allDatas => {
            allDatas[this.#key][formId] = saveData;
            new BackgroundMessage()
            .send('saveAutoReplySetting',{data: allDatas})
            .then(() => {})
            .catch(error => {throw error});
        });
    }
}