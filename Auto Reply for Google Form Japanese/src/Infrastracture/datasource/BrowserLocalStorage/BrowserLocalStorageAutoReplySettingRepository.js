import { AutoReplySetting } from "../../../Domain/Models/AutoReplySetting.js";
import { DataNotFoundException } from "../../../Exceptions/DataNotFoundException.js";
import { BackgroundMessage } from "../../../Background/BackgroundMessage.js";

export class BrowserLocalStorageAutoReplySettingRepository{

    /** @type {string} */
    #key;

    /** @type {BackgroundMessage} */
    #backgroundMessage;

    /**
     * 
     * @param {BackgroundMessage} backgroundMessage 
     */
    constructor(backgroundMessage){
        this.#backgroundMessage = backgroundMessage;
        this.#key = 'auto-reply-google-form-for-japanese';
    }
    /**
     * 復元
     * 
     * @param {string} formId - GoogleフォームのID
     * @return {Promise<AutoReplySetting>} 自動返信設定インスタンス 
     */
    async findByFormId(formId){
        const allDatas = await this.#backgroundMessage.send('getAutoReplySetting',{key: this.#key});
        const settingData = allDatas[this.#key][formId];

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
        const formId = autoReplySetting.getFormId();
        const saveData = autoReplySetting.getAsObject();

        this.#backgroundMessage.send('getAutoReplySetting',{key: this.#key})
        .then(allDatas => {
            allDatas[this.#key][formId] = saveData;
            this.#backgroundMessage.send('saveAutoReplySetting',{data: allDatas})
            .then(() => {})
            .catch(error => {throw error});
        });
    }
}