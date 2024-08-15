import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';
import { AppsScript } from '../../Infrastracture/Api/AppsScript.js';

export class DeactivateAutoReplyUseCase{

	async handle(formId){
		const repository = new BrowserLocalStorageAutoReplySettingRepository();
		try{
			const autoReplySetting =  await repository.findByFormId(formId);
			autoReplySetting.deactivate();
			await repository.save(autoReplySetting);
			
			if(!autoReplySetting.hasScript()){
				return;
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
			

			const scriptId = await new AppsScript().update(autoReplySetting.getScriptId(), [manifestFile]);
			return scriptId;
			
		}catch(e){

		}
	}
}