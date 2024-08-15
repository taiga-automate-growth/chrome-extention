import { Gmail } from '../../Infrastracture/Api/Gmail.js';
import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';


export class UpdateAliasesUseCase{

	/** @type {BrowserLocalStorageAutoReplySettingRepository} */
	#repository;
	
	/** @type {Gmail} */
	#gmail;

	constructor(repository, gmail){
		this.#repository = repository;
		this.#gmail = gmail;
	}

	/**
	 * 
	 * @param {string} formId - GoogleフォームのID
	 * @return 
	 */
	async handle(formId){
		
		try{
			
			const autoReplySetting = await this.#repository.findByFormId(formId);
			const aliases = await this.#gmail.getAliases();
			autoReplySetting.setAliases(aliases);
			await this.#repository.save(autoReplySetting);
			return {aliases: aliases};
			
		}catch(e){
			throw e;
		}
	

	}
}