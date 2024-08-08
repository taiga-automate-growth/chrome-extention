import { BackgroundMessage } from '../../Infrastracture/background/BackgroundMessage.js';
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
			const gmail = await new BackgroundMessage('ApiRequest', 'Gmail', 'getAliases').send();
			const aliases = gmail.sendAs.map(alias => {return alias.sendAsEmail});
			autoReplySetting.setAliases(aliases);
			repository.save(autoReplySetting);
			return {aliases: aliases};
			
		}catch(e){
			throw e;
		}
	

	}
}