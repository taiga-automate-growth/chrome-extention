import {BrowserLocalStorageAutoReplySettingRepository} from '../../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';

export class GetAutoReplySettingUseCase{
	
	handle(formId){
		const repository = new BrowserLocalStorageAutoReplySettingRepository();
		try{
			const autoReplySetting = repository.findByFormId(formId);
			return autoReplySetting.getAsObject();
		}catch(e){
			console.error(e.toStoring());
			return {status: false};
		}
	}

}