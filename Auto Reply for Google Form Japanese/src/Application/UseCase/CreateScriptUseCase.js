import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';
import {ApiRequestMessage} from '../../Infrastracture/Api/Request/ApiRequestMessage.js';
import {AutoReplySetting} from '../../Domain/Models/AutoReplySetting.js';

export class CreateScriptUseCase{
	/**
	 * @param {string} formId フォームID
	 * @param {Object} inputData フォームに入力されたデータ
	 * @return {string} 生成したGASのスクリプトID
	 */
	handle(formId,inputData){
	
		let autoReplySetting;
		const repository = new BrowserLocalStorageAutoReplySettingRepository();
		
		try{
		
			autoReplySetting = repository.findByFormId(formId);
			autoReplySetting.update(inputData)
			repository.save(autoReplySetting);
	  
        }catch(e){
        
	        autoReplySetting = new AutoReplySetting(inputData);
        
        }
        
        repository.save(autoReplySetting);
        
        if(autoReplySetting.isCollectEmail() === '収集しない'){
	        throw new NotCollectionEmailException();
        }
        
        if(autoReplySetting.isRequiredEmpty()){
	        throw new RequiredEmptyException();
        }
        
        if(!autoReplySetting.hasScript()){
	        
	        new ApiRequestMessage('Apps Script','createScript')
	        .send({title: '自動返信設定', parentId: autoReplySetting.getFormId()})
	        .then(res => {
		        autoReplySetting.setScriptId(res.scriptId)
		        repository.save(autoReplySetting);
	        })
	        .catch(e => {throw new ApiRequestFailedException()});
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
        
        const scriptFile = {
            name: 'main',
            type: 'SERVER_JS',
            source:`function autoReply(e) {
                
                // 回答オブジェクトを質問ごとに配列で取得
                const responses = e.response.getItemResponses();
                let subject = '${autoReplySetting.getSubject()}';
                let body = '${autoReplySetting.getBody().replace(/\n/g, '\\n')}';
                
                // 回答オブジェクトを一つずつループ
                for (const response of responses){
                    // 回答内容を取得
                    const answer = response.getResponse();

                    // 質問文を取得
                    const question = '{{' + response.getItem().getTitle() + '}}';

                    body = body.split(question).join(answer);
                    subject = subject.split(question).join(answer);
                    
                }
                // すべての回答を取得

                const recipient = e.response.getRespondentEmail();

                // オプション
                // const option = '${autoReplySetting.getMailOption()}';

                GmailApp.sendEmail(recipient, subject, body);
                // メールの送信を実行する
            }`,
            functionSet: {
                values: [
                {
                    name: 'autoReply',
                    parameters: ['e']
                }
            ]}
        }
        
        new ApiRequestMessage('Apps Script','updateScript')
        .send({scriptId: autoReplySetting, files: [manifestFile, scriptFile]})
        .then(res => {return res.scriptId})
        .catch(e => {throw e});
	}
}