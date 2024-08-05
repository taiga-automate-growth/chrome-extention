import {GetAutoReplySettingUseCase} from '../../Application/UseCase/GetAutoReplySettingUseCase.js';
import {ActivateAutoReplyUseCase} from '../../Application/UseCase/ActivateAutoReplyUseCase.js';
import {CreateScriptUseCase} from '../../Application/UseCase/CreateScriptUseCase.js';
import {DeactivateAutoReplyUseCase} from '../../Application/UseCase/DeactivateAutoReplyUseCase.js';
import {UpdateInsertContentsUseCase} from '../../Application/UseCase/UpdateInsertContentsUseCase.js';
import {UpdateAliasesUseCase} from '../../Application/UseCase/UpdateAliasesUseCase.js';

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
	
	#exceptionHandle(e){
	
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
			
		}catch(e){
			console.error(e.toString());
		}
	}
	
	async activate(formId){
		const activationData = await new ActivateAutoReplyUseCase().handle(formId);
		this.#view.update(activationData);
		this.#view.activate();
	}
	
	createScript(inputData,formId){
		const scriptId = new CreateScriptUseCase().handle(inputData,formId);
		this.#view.createScriptDone(scriptId);
	}
	
	deactivate(formId){
		new DeactivateAutoReplyUseCase().handle(formId);
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

}