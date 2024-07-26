class AutoReplySettingController{
	
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
	
	
	index(){
		const formId = this.#view.getFormId();
		
		try{
		
			const settingData = new GetAutoReplySettingUseCase().handle(formId);
			this.#view.update(settingData);
			this.#view.view(
				this.activate.bind(this),
				this.deactivate.bind(this),
				this.createScript.bind(this),
				this.updateInsertContents.bind(this),
				this.updateAliases.bind(this)
			);
			
		}catch(e){
			
		}
	}
	
	activate(formId){
		new ActivateAutoReplyUseCase().handle(formId);
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
		const aliases = new UpdateAliasesUsaCase().handle(formId);
		this.#view.updateAliases(aliases);
	}

}