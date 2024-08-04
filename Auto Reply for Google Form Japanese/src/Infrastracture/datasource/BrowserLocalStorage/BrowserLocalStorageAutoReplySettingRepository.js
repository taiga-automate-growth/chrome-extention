import { AutoReplySetting } from "../../../Domain/Models/AutoReplySetting.js";
import { BackgroundMessage } from "../../background/BackgroundMessage.js";

export class BrowserLocalStorageAutoReplySettingRepository{

    /**
     * 復元
     * 
     * @param {string} googleFormId GoogleフォームのID
     * @return {Promise} 自動返信設定インスタンス 
     */
    async findByFormId(googleFormId){
        const allDatas = await new BackgroundMessage('dataSourceAccess', 'BrowserLocalStorage', 'getAutoReplySetting')
        .send()
        const settingData = allDatas["auto-reply-google-form-for-japanese"][googleFormId];
        console.log(settingData);
        if(Object.keys(settingData).length === 0) throw new DataNotFoundException('このフォームに関する情報は保存されていません');

        return new AutoReplySetting(settingData);
    }

    /**
     * 永続化
     * 
     * @param {AutoReplySetting} autoReplySetting 自動返信設定インスタンス
     * @return {Promise}
     */
    save(autoReplySetting){
        const formId = autoReplySetting.getFormId();
        const saveData = autoReplySetting.getAsObject();

        new BackgroundMessage('dataSourceAccess', 'BrowserLocalStorage', 'getAutoReplySetting')
        .send()
        .then(allDatas => {
            allDatas[formId] = saveData;
            new BackgroundMessage('BrowserLocalStorage', 'saveAutoReplySetting', 'dataSourceAccess')
            .send({data: saveData})
            .then(() => {})
            .catch(error => {throw error});
        });
    }
}