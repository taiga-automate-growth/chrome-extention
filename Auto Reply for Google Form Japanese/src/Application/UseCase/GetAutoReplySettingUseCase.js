import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';

export class GetAutoReplySettingUseCase{
	/** @type {BrowserLocalStorageAutoReplySettingRepository} */
	#repository;

	constructor(repository){
		this.#repository = repository;
	}
	async handle(formId){
		
		try{
			const autoReplySetting = await this.#repository.findByFormId(formId);
			const savedData = autoReplySetting.getAsObject();
			return savedData;
		}catch(e){
			console.log(e);
			return {status: false};
		}
	}

}