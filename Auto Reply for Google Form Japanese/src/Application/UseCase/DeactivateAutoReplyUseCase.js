import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';
import { AppsScript } from '../../Infrastracture/Api/AppsScript.js';

export class DeactivateAutoReplyUseCase{
	/** @type {BrowserLocalStorageAutoReplySettingRepository} */
	#repository;
	
	/** @type {AppsScript} */
	#appsScript;

	constructor(repository, appsScript){
		this.#repository = repository;
        this.#appsScript = appsScript;
	}

	async handle(formId){

		try{
			const autoReplySetting =  await this.#repository.findByFormId(formId);
			autoReplySetting.deactivate();
			await this.#repository.save(autoReplySetting);
			
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
			

			const scriptId = await this.#appsScript.update(autoReplySetting.getScriptId(), [manifestFile]);
			return scriptId;
			
		}catch(e){

		}
	}
}