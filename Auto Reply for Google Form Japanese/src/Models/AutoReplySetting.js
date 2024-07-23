class AutoReplySetting{
    /**
     * @type {string}
     */
    #formId;
    #scriptId;
    #emailAddressCollectionType;
    /** @type {boolean} */
    #activationStatus;
    #subject;
    #body;
    #fromAddress;
    #fromName;
    #cc;
    #bcc;
    constructor(
        formId,
        scriptId = "", 
        emailAddressCollectionSetting, 
        activationStatus, 
        subject = "",
        body = "",
        fromAddress = "",
        fromName = "",
        cc = "",
        bcc = ""
    ){
        this.#formId = formId;
        this.#scriptId = scriptId;
        this.#emailAddressCollectionType = emailAddressCollectionSetting;
        this.#activationStatus = activationStatus;
        this.#subject = subject;
        this.#body = body;
        this.#fromAddress = fromAddress;
        this.#fromName = fromName;
        this.#cc = cc;
        this.#bcc = bcc;
    }

    /**
     * 更新する
     * 
     */
    update(
        subject = "",
        body = "",
        fromAddress = "",
        fromName = "",
        cc = "",
        bcc = ""){
    }

    /**
     * 有効化状態を切り替える
     * 
     */
    switchActivationState(){
        if(this.#activationStatus){
            this.#activationStatus = false;
        }else{
            this.#activationStatus = true;
        }
    }

    /**
     * 有効化状態を判定する
     * 
     * @return {boolean} 有効化ステータスが有効の場合はtrue、それ以外はfalse
     */
    isStatusActive(){
        if(this.#activationStatus === undefined) return false;
        return this.#activationStatus;
    }

    /**
     * スクリプトIDがあるか判定する
     * 
     * @return {boolean} スクリプトIDがある場合はtrue、それ以外はfalse
     */
    existsScriptId(){
        if(this.#scriptId !== "" && this.#scriptId === undefined) return true;
        return false;
    }

    /**
     * フォームIDを取得する
     * 
     * @return {string} GoogleフォームのID
     */
    getFormId(){
        return this.#formId;
    }

    /**
     * 保存用形式でデータを取得する
     * 
     * @return {object} 
     */
    getAsSaveData(){
        return {
            scriptId: this.#scriptId,
            emailAddressCollectionType: this.#emailAddressCollectionType,
            activationStatus: this.#activationStatus,
            subject: this.#subject,
            body: this.#body,
            fromAddress: this.#fromAddress,
            fromName: this.#fromName,
            cc: this.#cc,
            bcc: this.#bcc
        };
    }
    
    /**
     *
     */
     output(){
     	return {
    		formId:this.#formId,
    		scriptId:this.#scriptId,
 		    emailAddressCollectionType: this.#emailAddressCollectionType,
    		activationStatus: this.#activationStatus,
		    subject: this.#subject,
		    body: this.#body,
		    fromAddress: this.#fromAddress,
		    fromName: this.#fromName,
		    cc: this.#cc,
    		bcc: this.#bcc		
     	}
     }
}