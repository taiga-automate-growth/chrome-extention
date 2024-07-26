class GetAutoReplySettingUseCase{
	
	handle(formId){
		const repository = new BrowserLocalStorageAutoReplySettingRepository();
		try{
			const autoReplySetting = repository.findByFormId(formId);
			return autoReplySetting.getAsObject();
		}catch(e){
			return {status: false};
		}
	}

}