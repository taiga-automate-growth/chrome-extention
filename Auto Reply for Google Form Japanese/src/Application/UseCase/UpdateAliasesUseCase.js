import { Gmail } from '../../Infrastracture/Api/Gmail.js';
import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';


export class UpdateAliasesUseCase{
	/**
	 * 
	 * @param {string} formId - GoogleフォームのID
	 * @return 
	 */
	async handle(formId){
		
		const repository = new BrowserLocalStorageAutoReplySettingRepository();
		
		try{
			
			const autoReplySetting = await repository.findByFormId(formId);
			const aliases = await new Gmail().getAliases();
			autoReplySetting.setAliases(aliases);
			repository.save(autoReplySetting);
			return {aliases: aliases};
			
		}catch(e){
			throw e;
		}
	

	}
}