class InsertAutoReplySettingUsecase{

	/** @type {AutoReplySettingRepository} */
	#autoReplySettingRepository;
	
	/** 
	 * @constructor
	 * @param {AutoReplySettingRepository} autoReplySettingRepository
	 */
	constructor(autoReplySettingRepository){
		this.autoReplySettingRepository = autoReplySettingRepository;
	}
	
	/** 
	 * @param {string} GoogleフォームのID
	 * @return {object} 全ての設定値のオブジェクト
	 */
	execute(formId){
		const autoReplySetting = this.autoReplySettingRepository.findByGoogleFormId(formId);
		return autoReplySetting.output();
	}
}