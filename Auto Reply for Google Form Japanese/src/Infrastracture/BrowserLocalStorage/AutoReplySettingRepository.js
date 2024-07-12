class AutoReplySettingRepository{
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
     * @return {AutoReplySetting} 自動返信設定インスタンス 
     */
    findByGoogleFormId(googleFormId){
        const settingData = allSettingDatas["auto-reply-google-form-for-japanese"][googleFormId];
        if(Object.keys(settingData).length === 0) throw new Error('このフォームに関する情報は保存されていません');

        let scriptId, emailAddressCollectionType, activationStatus, subject, body, fromAddress, fromName, cc, bcc;
        if('emailAddressCollectionType' in settingData) emailAddressCollectionType = settingData.emailAddressCollectionSetting;
        if('activationStatus' in settingData) activationStatus = settingData.activationStatus;
        if('scriptid' in settingData) scriptId = settingData.scriptId;
        if('subject' in settingData) subject = settingData.subject;
        if('body' in settingData) body = settingData.body;
        if('fromAddress' in settingData) fromAddress = settingData.fromAddress;
        if('fromName' in settingData) fromName = settingData.fromName;
        if('cc' in settingData) cc = settingData.cc;
        if('bcc' in settingData) bcc = settingData.bcc;

        return new AutoReplySetting(googleFormId, scriptId, emailAddressCollectionType,activationStatus, subject, body, fromAddress, fromName, cc, bcc);
    }

    /**
     * 保存
     * 
     * @param {AutoReplySetting} autoReplySetting 自動返信設定インスタンス
     * @param {}
     */
    save(autoReplySetting){
        const formId = autoReplySetting.getFormId();
        const saveData = autoReplySetting.getAsSaveData();
        this.#allSettingDatas[formId] = saveData;
        chrome.storage.local.set(this.#allSettingDatas)
        .then(() => {})
        .catch(() => {
            delete this.#allSettingDatas[formId];
            throw new Error('データの保存に失敗しました');
        });
    }
}