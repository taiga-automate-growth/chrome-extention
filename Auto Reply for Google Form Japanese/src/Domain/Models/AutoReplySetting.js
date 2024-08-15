export class AutoReplySetting{
    /** @type {string} */
    #formId;
    
    /** @type {string} */
    #scriptId;
    
    /** @type {string} */
    #emailAddressCollectionType;
    
    /** @type {boolean} */
    #status;
    
    /** @type {string} */
    #subject;
    
    /** @type {string} */
    #body;
    
    /** @type {string} */
    #fromAddress;
    
    /** @type {string} */
    #fromName;
    
    /** @type {string} */
    #cc;
    
    /** @type {string} */
    #bcc;
    
    /** @type {Array<string>} */
    #insertContents;
    
    /** @type {Array<string>} */
    #aliases;
    
    /** @constructor */
    constructor(settingDatas){
        this.#formId = settingDatas.formId ?? "";
        this.#scriptId = settingDatas.scriptId ?? "";
        this.#emailAddressCollectionType = settingDatas.emailAddressCollectionType ?? "";
        this.#status = settingDatas.status ?? "";
        this.#subject = settingDatas.subject ?? "";
        this.#body = settingDatas.body ?? "";
        this.#fromAddress = settingDatas.fromAddress ?? "";
        this.#fromName = settingDatas.fromName ?? "";
        this.#cc = settingDatas.cc ?? "";
        this.#bcc = settingDatas.bcc ?? "";
        this.#insertContents = settingDatas.insertContents ?? "";
        this.#aliases = settingDatas.aliases ?? "";
    }

    
    /**
     * @return {Object} settingDatas
     */
    getAsObject(){
     	return {
    		formId:this.#formId,
    		scriptId:this.#scriptId,
 		    emailAddressCollectionType: this.#emailAddressCollectionType,
    		status: this.#status,
		    subject: this.#subject,
		    body: this.#body,
		    fromAddress: this.#fromAddress,
		    fromName: this.#fromName,
		    cc: this.#cc,
    		bcc: this.#bcc,
    		insertContents:this.#insertContents,
    		aliases:this.#aliases
     	}
     }

	/**
	 * 
	 */
	activate(){
		this.#status = true;
	}
	
	/**
	 * 
	 */
	deactivate(){
		this.#status = false;
	}
	
	/**
	 * @return {Boolean}
	 */
	isCollectEmail(){
		if(this.#emailAddressCollectionType === "収集しない") return false;
		return true;
	}
	
	/**
	 * @return {Boolean}
	 */
	isRequiredEmpty(){
		if(this.#subject === "" || this.#body === "" || this.#fromAddress === "") return true;
		return false;
	}
	
	/**
	 * @return {string}
	 */
	getFormId(){
		return this.#formId;
	}
	
	/**
	 * @return {Boolean}
	 */
	hasScript(){
		if(this.#scriptId !== undefined && this.#scriptId !== '') return true;
		return false;
	}
	
	/**
	 * @return {string}
	 */
	getSubject(){
		return this.#subject;
	}
	
	/**
	 * @return {string}
	 */
	getBody(){
		return this.#body;
	}
	
	/**
	 * @return {Object}
	 */
	getMailOption(){
		return {
			from: this.#fromAddress,
			name: this.#fromName,
			cc: this.#cc,
			bcc: this.#bcc
		}
	}
	
	/**
	 * @return {string}
	 */
	getScriptId(){
		return this.#scriptId;
	}
	
	/**
	 * @param {string} scriptId
	 */
	setScriptId(scriptId){
		this.#scriptId = scriptId;
	}

	/**
	 * @param {Object} inputData
	 */
	update(inputData){
		this.#formId = inputData.formId ?? "";
        this.#emailAddressCollectionType = inputData.emailAddressCollectionType ?? "";
        this.#status = inputData.status ?? "";
        this.#subject = inputData.subject ?? "";
        this.#body = inputData.body ?? "";
        this.#fromAddress = inputData.fromAddress ?? "";
        this.#fromName = inputData.fromName ?? "";
        this.#cc = inputData.cc ?? "";
        this.#bcc = inputData.bcc ?? "";
        this.#insertContents = inputData.insertContents ?? "";
        this.#aliases = inputData.aliases ?? "";
	}
}