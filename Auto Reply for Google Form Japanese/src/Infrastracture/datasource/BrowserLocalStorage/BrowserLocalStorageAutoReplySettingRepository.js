import { AutoReplySetting } from "../../../Domain/Models/AutoReplySetting.js";
import { BackgroundMessage } from "../../background/BackgroundMessage.js";

export class BrowserLocalStorageAutoReplySettingRepository{
    #allSettingDatas;
    constructor(){
        const allSettingDatas = new BackgroundMessage('dataSourceAccess', 'BrowserLocalStorage', 'getAutoReplySetting').send();
        console.log(allSettingDatas);
        
        // .then(allSettingDatas => {
        //     this.#allSettingDatas = allSettingDatas;
        // })
        // .catch(() => {
        //     throw new DataNotFoundException('ブラウザのローカルストレージ内にデータがありません');
        // })
        // chrome.storage.local.get(["auto-reply-google-form-for-japanese"])
        // .then(allSettingDatas => {
        //     this.#allSettingDatas = allSettingDatas;
        // })
        // .catch(() => {
        //     throw new Error('ブラウザにこの拡張機能専用の格納領域が設定されていません');
        // });
    }

    /**
     * 復元
     * 
     * @param {string} googleFormId GoogleフォームのID
     * @return {AutoReplySetting} 自動返信設定インスタンス 
     */
    findByFormId(googleFormId){
        const settingData = this.#allSettingDatas["auto-reply-google-form-for-japanese"][googleFormId];
        if(Object.keys(settingData).length === 0) throw new Error('このフォームに関する情報は保存されていません');

        return new AutoReplySetting(settingData);
    }

    /**
     * 永続化
     * 
     * @param {AutoReplySetting} autoReplySetting 自動返信設定インスタンス
     */
    save(autoReplySetting){
        const formId = autoReplySetting.getFormId();
        const saveData = autoReplySetting.getAsObject();
        this.#allSettingDatas[formId] = saveData;
        new BackgroundMessage('BrowserLocalStorage', 'saveAutoReplySetting', 'dataSourceAccess').send()
        // chrome.storage.local.set(this.#allSettingDatas)
        // .then(() => {})
        // .catch(() => {
        //     delete this.#allSettingDatas[formId];
        //     throw new Error('データの保存に失敗しました');
        // });
    }
}