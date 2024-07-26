class UpdateAliasesUseCase{
	handle(formId){
		new ApiRequestMessage('Gmail', 'getAliases').send()
		.then(gmail => {
			
			const repository = new BrowserLocalStorageAutoReplySettingRepository();
			
			try{
			
				const autoReplySetting = repository.findByFormId(formId);
				const aliases = gmail.sendAs;
				autoReplySetting.setAliases(aliases);
				repository.save(autoReplySetting);
				return aliases;
				
			}catch(e){
				throw e;
			}
		
		})
		.catch(e => throw e);
	}
}