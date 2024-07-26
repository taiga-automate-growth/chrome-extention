class DeactivateAutoReplyUseCase{

	handle(formId){
		const repository = new BrowserLocalStorageAutoReplySettingRepository();
		try{
			const autoReplySetting = repository.findByFormId(formId);
			autoReplySetting.deactivate();
			repository.save(autoReplySetting);
			
			if(!autoReplySetting.hasScript()){
				throw new NotFoundScriptException();
			}
			const manifestFile = {
	            name: 'appsscript',
	            type: 'JSON',
	            source:JSON.stringify({
	                "timeZone": "Asia/Tokyo",
	                "dependencies": {},
	                "exceptionLogging": "STACKDRIVER",
	                "runtimeVersion": "V8",
	                "oauthScopes":[
	                    "https://mail.google.com/",
	                    "https://www.googleapis.com/auth/script.scriptapp",
	                    "https://www.googleapis.com/auth/forms"
	                ]
	            })
	        }
			
			new ApiRequestMessage('Apps Script', 'updateScript')
			.send({scriptId: autoReplySetting.getScriptId(), files[manifestFile]})
			.then(res => {})
			.catch(e => throw e);
			
		}catch(e){

		}
	}
}