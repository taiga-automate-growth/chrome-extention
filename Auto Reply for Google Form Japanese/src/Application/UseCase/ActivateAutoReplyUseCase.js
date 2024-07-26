class ActivateAutoReplyUseCase{

	handle(formId){
	
		const repository = new BrowserLocalStorageAutoReplySettingRepository();
		try{
			const autoReplySetting = repository.findByFormId(formId);
			autoReplySetting.activate();
			repository.save(autoReplySetting);
			return autoReplySetting.getAsObject();
		}catch(e){
			const firstTimeData = {status: true};
			
			new ApiRequestMessage('form','getForm')
			.send({formId: formId})
			.then(form => {form.items;})
			.catch(e => throw e);
			
			new ApiRequestMessage('gmail','getAliases').send()
			.then(res => firstTimeData.aliases = res.sendAs)
			.catch(e => throw e);
			
			return firstTiteData;
		}
		
	}
}