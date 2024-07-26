class UpdateInsertContentsUseCase{

	/**
	 * @param {string} formId
	 */
	handle(formId){
		new ApiRequestMessage('Google Form', 'getForm')
		.send({formId: formId})
		.then(form => {
			
			const repository = new BrowserLocalStorageAutoReplySettingRepository();
			
			try{
			
				const autoReplySetting = repository.findByFormId(formId);
				const insertContents = form.items;
				autoReplySetting.setInsertContents(insertContents);
				repository.save(autoReplySetting);
				return insertContents;
				
			}catch(e){
				throw e;
			}
		
		})
		.catch(e => throw e);
	}
}