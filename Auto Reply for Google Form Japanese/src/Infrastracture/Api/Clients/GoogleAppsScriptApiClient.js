import { GoogleApiClient } from "./GoogleApiClient.js";

export class GoogleAppsScriptApiClient extends GoogleApiClient{
	
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
	 * @return {Promise}
	 */
	createScript(title, parentId){
		this.parameters.method = 'POST';
		const body = {
			title: title,
			parentId: parentId
		}
		this.parameters.body = JSON.stringfy(body);
		return new Promise((resolve,reject) => {
			fetch(`${this.#baseUrl}/v1/projects?key=${this.#apiKey}`, this.parameters)
			.then(response => response.json())
			.then(project => resolve(project))
			.catch(error => reject(error));
		})
	}
	
	/**
	 * @param {string} scriptId 更新するスクリプトのID
	 * @param {Array<Object>} files GASのスクリプトファイル
	 * @return {Promise}
	 */
	updateScript(scriptId, files){
		this.parameters.method = 'POST';
		this.parameters.body = {files: JSON.stringfy(files)};

		return new Promise((resolve,reject) => {
			fetch(`${this.#baseUrl}/v1/projects/${scriptId}/content?key=${this.#apiKey}`, this.parameters)
			.then(response => response.json())
			.then(project => resolve(project))
			.catch(error => reject(error));
		});
	
	
	}

}