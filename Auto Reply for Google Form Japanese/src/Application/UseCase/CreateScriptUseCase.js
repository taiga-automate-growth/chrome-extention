import { BrowserLocalStorageAutoReplySettingRepository } from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';
import { AutoReplySetting } from '../../Domain/Models/AutoReplySetting.js';
import { DataNotFoundException } from '../../Exceptions/DataNotFoundException.js';
import { EmailNotCollectException } from '../../Exceptions/EmailNotCollectException.js';
import { RequiredEmptyException } from '../../Exceptions/RequiredEmptyException.js';
import { AppsScript } from '../../Infrastracture/Api/AppsScript.js';

export class CreateScriptUseCase{

    /** @type {BrowserLocalStorageAutoReplySettingRepository} */
	#repository;
	
	/** @type {AppsScript} */
	#appsScript;

	constructor(repository, appsScript){
		this.#repository = repository;
        this.#appsScript = appsScript;
	}

	/**
	 * @param {string} formId フォームID
	 * @param {Object} inputData フォームに入力されたデータ
	 * @return {Promise}
	 */
	async handle(formId,inputData){
		let autoReplySetting;
        try {
            autoReplySetting = await this.#repository.findByFormId(formId);
            autoReplySetting.update(inputData);
        } catch (error) {
            if(error instanceof DataNotFoundException){

                autoReplySetting = new AutoReplySetting(inputData);
            }
        }
        
        if(!autoReplySetting.isCollectEmail()){
	        throw new EmailNotCollectException();
        }
        
        if(autoReplySetting.isRequiredEmpty()){
	        throw new RequiredEmptyException();
        }
        
        if(!autoReplySetting.hasScript()){
            try {
                const project = await this.#appsScript.create('自動返信設定', autoReplySetting.getFormId());
                autoReplySetting.setScriptId(project.scriptId);
            } catch (e) {
                throw e;
            }
        }
        await this.#repository.save(autoReplySetting);

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
        
        const scriptFile = {
            name: 'main',
            type: 'SERVER_JS',
            source:`function autoReply(e) {
                
                const responses = e.response.getItemResponses();
                let subject = '${autoReplySetting.getSubject()}';
                let body = '${autoReplySetting.getBody().replace(/\n/g, '\\n')}';
                
                for (const response of responses){
                    const answer = response.getResponse();

                    const question = '{{' + response.getItem().getTitle() + '}}';

                    body = body.split(question).join(answer);
                    subject = subject.split(question).join(answer);
                    
                }

                const recipient = e.response.getRespondentEmail();

                const option = JSON.parse(${JSON.stringify(autoReplySetting.getMailOption())});

                GmailApp.sendEmail(recipient, subject, body, option);
            }`,
            functionSet: {
                values: [
                {
                    name: 'autoReply',
                    parameters: ['e']
                }
            ]}
        }
        
        const project = await this.#appsScript.update(autoReplySetting.getScriptId(),[manifestFile, scriptFile])
        return project.scriptId;   
       
	}
}