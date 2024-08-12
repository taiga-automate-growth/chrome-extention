import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';
import { BackgroundMessage } from '../../Infrastracture/background/BackgroundMessage.js';

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
			
			return new Promise((resolve,reject) => {

				new BackgroundMessage('ApiRequest', 'Apps Script', 'updateScript')
				.send({scriptId: autoReplySetting.getScriptId(), files: [manifestFile]})
				.then(res => resolve(res))
				.catch(e => reject(e));
			})
			
		}catch(e){

		}
	}
}