import { AutoReplySetting } from "../../../Domain/Models/AutoReplySetting.js";
import { DataNotFoundException } from "../../../Exceptions/DataNotFoundException.js";
import { BackgroundMessage } from "../../background/BackgroundMessage.js";

export class BrowserLocalStorageAutoReplySettingRepository{

    /**
     * 復元
     * 
     * @param {string} formId GoogleフォームのID
     * @return {Promise} 自動返信設定インスタンス 
     */
    async findByFormId(formId){
        console.log(formId);
        const allDatas = await new BackgroundMessage('dataSourceAccess', 'BrowserLocalStorage', 'getAutoReplySetting')
        .send()
        const settingData = allDatas["auto-reply-google-form-for-japanese"][formId];
        console.log(settingData);

        if(settingData === undefined || settingData === null || Object.keys(settingData).length === 0) {
            throw new DataNotFoundException('このフォームに関する情報は保存されていません');
        }
        return new AutoReplySetting(settingData);
    }

    /**
     * 永続化
     * 
     * @param {AutoReplySetting} autoReplySetting 自動返信設定インスタンス
     * @return {Promise}
     */
    save(autoReplySetting){
        console.log(autoReplySetting);
        const formId = autoReplySetting.getFormId();
        console.log('今から保存するデータのフォームIDです');
        console.log(formId);
        const saveData = autoReplySetting.getAsObject();

        new BackgroundMessage('dataSourceAccess', 'BrowserLocalStorage', 'getAutoReplySetting')
        .send()
        .then(allDatas => {
            delete allDatas['auto-reply-google-form-for-japanese']['auto-reply-google-form-for-japanese'];
            allDatas['auto-reply-google-form-for-japanese'][formId] = saveData;
            new BackgroundMessage('dataSourceAccess', 'BrowserLocalStorage', 'saveAutoReplySetting')
            .send({data: allDatas})
            .then(() => {})
            .catch(error => {throw error});
        });
    }
}