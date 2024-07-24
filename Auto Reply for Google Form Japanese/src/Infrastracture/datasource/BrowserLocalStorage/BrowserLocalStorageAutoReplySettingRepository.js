class BrowserLocalStorageAutoReplySettingRepository{
    #allSettingDatas;
    constructor(){
        chrome.storage.local.get(["auto-reply-google-form-for-japanese"])
        .then(allSettingDatas => {
            this.#allSettingDatas = allSettingDatas;
        })
        .catch(() => {
            throw new Error('ブラウザにこの拡張機能専用の格納領域が設定されていません');
        });
    }

    /**
     * 復元
     * 
     * @param {string} googleFormId GoogleフォームのID
     * @return {AutoReplySetting} 自動返信設定インスタンス 
     */
    findByFormId(googleFormId){
        const settingData = allSettingDatas["auto-reply-google-form-for-japanese"][googleFormId];
        if(Object.keys(settingData).length === 0) throw new Error('このフォームに関する情報は保存されていません');

        let scriptId, emailAddressCollectionType, status, subject, body, fromAddress, fromName, cc, bcc, insertContents, aliases;
        if('emailAddressCollectionType' in settingData) emailAddressCollectionType = settingData.emailAddressCollectionSetting;
        if('activationStatus' in settingData) activationStatus = settingData.activationStatus;
        if('scriptid' in settingData) scriptId = settingData.scriptId;
        if('subject' in settingData) subject = settingData.subject;
        if('body' in settingData) body = settingData.body;
        if('fromAddress' in settingData) fromAddress = settingData.fromAddress;
        if('fromName' in settingData) fromName = settingData.fromName;
        if('cc' in settingData) cc = settingData.cc;
        if('bcc' in settingData) bcc = settingData.bcc;
        if('insertContents' in settingData) insertContents = settingData;
        if('aliases' in settingData) aliases = settingData.aliases;

        return new AutoReplySetting(googleFormId, scriptId, emailAddressCollectionType,activationStatus, subject, body, fromAddress, fromName, cc, bcc,insertContents,aliases);
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
        chrome.storage.local.set(this.#allSettingDatas)
        .then(() => {})
        .catch(() => {
            delete this.#allSettingDatas[formId];
            throw new Error('データの保存に失敗しました');
        });
    }
}