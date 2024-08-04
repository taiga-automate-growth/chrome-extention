import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';

export class GetAutoReplySettingUseCase{
	
	async handle(formId){
		const repository = new BrowserLocalStorageAutoReplySettingRepository();
		
		try{
			const autoReplySetting = await repository.findByFormId(formId);
			const savedData = autoReplySetting.getAsObject();
			return savedData;
		}catch(e){
			console.log(e);
			return {status: false};
		}
	}

}