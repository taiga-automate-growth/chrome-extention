class SwitchActivationStatusUsecase{
	
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
	 * 
	 */
	execute(formId){
		const autoReplySetting = this.autoReplySettingRepository.findByGoogleFormId(formId);
		autoReplySetting.switchActivationStatus();
		this.autoReplySettingRepository.save(autoReplySetting);
		return autoReplySetting.output();
	}	


}