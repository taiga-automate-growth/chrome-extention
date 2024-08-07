import {GetAutoReplySettingUseCase} from '../../Application/UseCase/GetAutoReplySettingUseCase.js';
import {ActivateAutoReplyUseCase} from '../../Application/UseCase/ActivateAutoReplyUseCase.js';
import {CreateScriptUseCase} from '../../Application/UseCase/CreateScriptUseCase.js';
import {DeactivateAutoReplyUseCase} from '../../Application/UseCase/DeactivateAutoReplyUseCase.js';
import {UpdateInsertContentsUseCase} from '../../Application/UseCase/UpdateInsertContentsUseCase.js';
import {UpdateAliasesUseCase} from '../../Application/UseCase/UpdateAliasesUseCase.js';
import { EmailNotCollectException } from '../../Exceptions/EmailNotCollectException.js';
import { RequiredEmptyException } from '../../Exceptions/RequiredEmptyException.js';

export class AutoReplySettingController{
	
	/** @type {AutoReplySettingView} */
	#view;
	
	/**
	 * @constructor
	 * @param {AutoReplySettingView} view
	 */
	constructor(view){
		this.#view = view;
	}
	
	async index(){
		const formId = this.#view.getFormId();
		const settingData = await new GetAutoReplySettingUseCase().handle(formId);
		
		try{
		
			this.#view.update(settingData);
			this.#view.view(
				this.activate.bind(this),
				this.deactivate.bind(this),
				this.createScript.bind(this),
				this.updateInsertContents.bind(this),
				this.updateAliases.bind(this)
			);

			if(settingData.status === 'true'){
				this.#view.activate();
			}else{
				this.#view.deactivate();
			}
			
		}catch(e){
			console.error(e.toString());
		}
	}
	
	async activate(formId){
		const activationData = await new ActivateAutoReplyUseCase().handle(formId);
		this.#view.update(activationData);
		this.#view.activate();
	}
	
	async createScript(formId,inputData){
		try {
			const scriptId = await new CreateScriptUseCase().handle(formId,inputData);
			this.#view.createScriptDone(scriptId);
		} catch (error) {
			this.#errorHandle(error);
		}
	}
	
	async deactivate(formId){
		await new DeactivateAutoReplyUseCase().handle(formId);
		this.#view.deactivate();
	}
	
	updateInsertContents(formId){
		const insertContents = new UpdateInsertContentsUseCase().handle(formId);
		this.#view.updateInsertContents(insertContents);
	}
	
	updateAliases(formId){
		const aliases = new UpdateAliasesUseCase().handle(formId);
		this.#view.updateAliases(aliases);
	}

	/**
	 * 
	 * @param {Error} error エラーオブジェクト 
	 */
	#errorHandle(error){
		let errorMessage;

		if(error instanceof EmailNotCollectException) {
			errorMessage = 'メールアドレスの収集設定が「収集しない」になっているためエラーが発生しました\n「回答者からの入力」もしくは「確認済み」に変更してください';
		
		}else if(error instanceof RequiredEmptyException){
			errorMessage = '必須項目の入力がされていないためエラーが発生しました\n件名、本文、送信元アドレスは必須です';
		}

		this.#view.error(errorMessage);
	}

}