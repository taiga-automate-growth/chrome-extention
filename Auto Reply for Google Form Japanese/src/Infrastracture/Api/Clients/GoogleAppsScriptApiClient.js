class GoogleAppsScriptApiClient extends GoogleApiClient{
	
	/** @type {string} */
	#baseUrl;
	
	/** @type {string} */
	#apiKey;
	
	/** 
	 * @constructor
	 * 
	 */
	constructor(){
		this.#baseUrl = 'https://script.googleapis.com';
		this.#apiKey = 'AIzaSyANMKrOrF6hDYmQywMfYKcL9YU15Sx0WL8';
	}
	
	/** 
	 * @param {string} title スクリプトのタイトル
	 * @param {string} parentId スクリプトを紐づけるGoogleサービスのID
	 * @return {object} GASプロジェクトオブジェクト
	 */
	createScript(title, parentId){
		this.parameters.method = 'POST';
		const body = {
			title: title,
			parentId: parentId
		}
		this.parameters.body = JSON.stringfy(body};
		fetch(`${this.#baseUrl}/v1/projects?key=${this.#apiKey}`, this.parameters)
		.then(response => response.json())
		.then(project => {return project;})
		.catch(error => {return error;});
	}
	
	/**
	 * @param {Array<Script>} files GASのスクリプトファイル
	 * @param {string} scriptId 更新するスクリプトのID
	 */
	updateScript(files, scriptId){
		this.parameters.method = 'POST';
		this.parameters.body = {files: JSON.stringfy(files)};
		fetch(`${this.#baseUrl}/v1/projects/${scriptId}/content?key=${this.#apiKey}`, this.parameters)
		.then(response => response.json())
	
	
	}
	
	deploy(){
	
	
	}
	
	
	executeFunction(){
	
	
	}

}