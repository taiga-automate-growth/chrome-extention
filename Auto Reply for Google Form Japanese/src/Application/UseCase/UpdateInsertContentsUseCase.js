import { GoogleForm } from '../../Infrastracture/Api/GoogleForm.js';
import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';

export class UpdateInsertContentsUseCase{
	/** @type {BrowserLocalStorageAutoReplySettingRepository} */
	#repository;

	/** @type {GoogleForm} */
	#googleForm;

	constructor(repository, googleForm){
		this.#repository = repository;
		this.#googleForm = googleForm;
	}
	/**
	 * @param {string} formId - GoogleフォームのID
	 * @return {Promise}
	 */
	async handle(formId){
		
		try{
		
			const autoReplySetting = await this.#repository.findByFormId(formId);
			const insertContents = await this.#googleForm.getQuestionTitles(formId);
			autoReplySetting.setInsertContents(insertContents);
			await this.#repository.save(autoReplySetting);
			return {insertContents: insertContents};
			
		}catch(e){
			throw e;
		}
	
	}
}