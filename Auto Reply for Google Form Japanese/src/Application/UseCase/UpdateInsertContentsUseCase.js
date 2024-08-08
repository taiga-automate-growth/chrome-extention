import { BackgroundMessage } from '../../Infrastracture/background/BackgroundMessage.js';
import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';

export class UpdateInsertContentsUseCase{

	/**
	 * @param {string} formId - GoogleフォームのID
	 * @return {Promise}
	 */
	async handle(formId){
		const form = await new BackgroundMessage('ApiRequest', 'Google Form', 'getForm').send({formId: formId});
			
		const repository = new BrowserLocalStorageAutoReplySettingRepository();
		
		try{
		
			const autoReplySetting = await repository.findByFormId(formId);
			const insertContents = form.items.map(item => {return item.title});
			autoReplySetting.setInsertContents(insertContents);
			await repository.save(autoReplySetting);
			return {insertContents: insertContents};
			
		}catch(e){
			throw e;
		}
	
	}
}