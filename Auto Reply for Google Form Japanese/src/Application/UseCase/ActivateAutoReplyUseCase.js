import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';
import { BackgroundMessage } from '../../Infrastracture/background/BackgroundMessage.js';
import { DataNotFoundException } from '../../Exceptions/DataNotFoundException.js';

export class ActivateAutoReplyUseCase{

	/**
	 * 
	 * @param {string} formId 
	 * @return {Promise} 
	 */
	async handle(formId){
	
		const repository = new BrowserLocalStorageAutoReplySettingRepository();
		try{
			const autoReplySetting = await repository.findByFormId(formId);
			autoReplySetting.activate();
			await repository.save(autoReplySetting);
			return autoReplySetting.getAsObject();
		}catch(e){
			console.log(typeof e);
			console.log(e);
			if(e instanceof DataNotFoundException){

				console.log('データが保存されていないエラーです');
				const firstTimeData = {status: true};
				
				const formPromise = new BackgroundMessage('ApiRequest', 'form', 'getForm')
				.send({formId: formId})
				.catch(e => {throw e});

				const aliasesPromise = new BackgroundMessage('ApiRequest', 'gmail', 'getAliases')
				.send()
				.catch(e => {throw e});
				const [form, aliases] = await Promise.all([formPromise, aliasesPromise]);

				firstTimeData.insertContents = form.items;
				firstTimeData.aliases = aliases.sendAs;

				return firstTimeData;
			}
		}
		
	}
}