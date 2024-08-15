import { BrowserLocalStorageAutoReplySettingRepository } from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';
import { DataNotFoundException } from '../../Exceptions/DataNotFoundException.js';
import { GoogleForm } from '../../Infrastracture/Api/GoogleForm.js';
import { Gmail } from '../../Infrastracture/Api/Gmail.js';
import { AutoReplySetting } from '../../Domain/Models/AutoReplySetting.js';

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
				
				const formPromise = await new GoogleForm().getQuestionTitles(formId);

				const aliasesPromise = await new Gmail().getAliases();

				const [form, aliases] = await Promise.all([formPromise, aliasesPromise]);

				firstTimeData.insertContents = form;

				firstTimeData.aliases = aliases;
				firstTimeData.formId = formId;
				console.log(firstTimeData);

				const data = new AutoReplySetting(firstTimeData);
				console.log(data);
				await repository.save(data);
				return firstTimeData;
			}
		}
		
	}
}