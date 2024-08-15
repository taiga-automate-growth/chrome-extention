import { GoogleForm } from '../../Infrastracture/Api/GoogleForm.js';
import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';

export class UpdateInsertContentsUseCase{

	/**
	 * @param {string} formId - GoogleフォームのID
	 * @return {Promise}
	 */
	async handle(formId){
			
		const repository = new BrowserLocalStorageAutoReplySettingRepository();
		
		try{
		
			const autoReplySetting = await repository.findByFormId(formId);
			const insertContents = await new GoogleForm().getQuestionTitles(formId);
			autoReplySetting.setInsertContents(insertContents);
			await repository.save(autoReplySetting);
			return {insertContents: insertContents};
			
		}catch(e){
			throw e;
		}
	
	}
}