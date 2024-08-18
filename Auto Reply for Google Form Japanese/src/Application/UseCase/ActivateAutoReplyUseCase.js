import { BrowserLocalStorageAutoReplySettingRepository } from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';
import { DataNotFoundException } from '../../Exceptions/DataNotFoundException.js';
import { GoogleForm } from '../../Infrastracture/Api/GoogleForm.js';
import { Gmail } from '../../Infrastracture/Api/Gmail.js';
import { AutoReplySetting } from '../../Domain/Models/AutoReplySetting.js';

export class ActivateAutoReplyUseCase{
	/** @type {BrowserLocalStorageAutoReplySettingRepository} */
	#repository;
	
	/** @type {GoogleForm} */
	#googleForm;

	/** @type {Gmail} */
	#gmail;

	constructor(repository, googleForm, gmail){
		this.#repository = repository;
		this.#googleForm = googleForm;
		this.#gmail = gmail;
	}
	/**
	 * 
	 * @param {string} formId 
	 * @return {Promise} 
	 */
	async handle(formId){
		try{
			const autoReplySetting = await this.#repository.findByFormId(formId);
			autoReplySetting.activate();
			await this.#repository.save(autoReplySetting);
			return autoReplySetting.getAsObject();
		}catch(e){
			if(e instanceof DataNotFoundException){

				const firstTimeData = {status: true};
				
				const formPromise = this.#googleForm.getQuestionTitles(formId);

				const aliasesPromise = this.#gmail.getAliases();

				const [form, aliases] = await Promise.all([formPromise, aliasesPromise]);

				firstTimeData.insertContents = form;

				firstTimeData.aliases = aliases;
				firstTimeData.formId = formId;

				const data = new AutoReplySetting(firstTimeData);
				await this.#repository.save(data);
				return firstTimeData;
			}
		}
		
	}
}