export class AutoReplySettingDto{
    /** @type {string} */
    formId;
    
    /** @type {string} */
    scriptId;
    
    /** @type {string} */
    emailAddressCollectionType;
    
    /** @type {boolean} */
    status;
    
    /** @type {string} */
    subject;
    
    /** @type {string} */
    body;
    
    /** @type {string} */
    fromAddress;
    
    /** @type {string} */
    fromName;
    
    /** @type {string} */
    cc;
    
    /** @type {string} */
    bcc;
    
    /** @type {Array<string>} */
    insertContents;
    
    /** @type {Array<string>} */
    aliases;
    /**
     * 
     * @param {Object} data - 自動返信設定情報
     * @param {string} data.formId - GoogleフォームのID
     * @param {string} data.scriptId - スクリプトのID
     * @param {string} data.emailAddressCollectionType - メールアドレスの収集方式
     * @param {string} data.status - 自動返信の有効化状態
     * @param {string} data.subject - メールの件名
     * @param {string} data.body - メールの本文
     * @param {string} data.fromAddress - メールの送信元アドレス
     * @param {string} data.fromName - メールの表示名
     * @param {string} data.cc - メールのCC
     * @param {string} data.bcc - メールのBCC
     * @param {Array<string>} data.insertContent - メールの差し込みコンテンツ
     * @param {Array<string>} data.aliases - メールのエイリアス
     */
    constructor(data){
        this.formId = data.formId ?? "";
        this.scriptId = data.scriptId ?? "";
        this.emailAddressCollectionType = data.emailAddressCollectionType ?? "";
        this.status = data.status ?? "";
        this.subject = data.subject ?? "";
        this.body = data.body ?? "";
        this.fromAddress = data.fromAddress ?? "";
        this.fromName = data.fromName ?? "";
        this.cc = data.cc ?? "";
        this.bcc = data.bcc ?? "";
        this.insertContents = data.insertContents ?? "";
        this.aliases = data.aliases ?? "";
    }
}