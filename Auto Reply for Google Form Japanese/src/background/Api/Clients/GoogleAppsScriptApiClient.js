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
		super();
		this.#baseUrl = 'https://script.googleapis.com';
		this.#apiKey = 'AIzaSyANMKrOrF6hDYmQywMfYKcL9YU15Sx0WL8';
	}
	
	/** 
	 * @param {string} title スクリプトのタイトル
	 * @param {string} parentId スクリプトを紐づけるGoogleサービスのID
	 * @return {Promise}
	 */
	async createScript(title, parentId){
		await this.getAuthToken();
		return new Promise((resolve,reject) => {
			fetch(`${this.#baseUrl}/v1/projects?key=${this.#apiKey}`, {
				method: 'POST',
				headers: {
                    Authorization:'Bearer ' + this.token,
                    'Content-Type':'application/json'
                },
                'contentType': 'json',
				body:JSON.stringify({
					title: title,
					parentId: parentId
				})
			})
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
	async updateScript(scriptId, files){
		await this.getAuthToken();
		return new Promise((resolve,reject) => {
			fetch(`${this.#baseUrl}/v1/projects/${scriptId}/content?key=${this.#apiKey}`, {
				method: 'PUT',
				headers: {
                    Authorization:'Bearer ' + this.token,
                    'Content-Type':'application/json'
                },
                'contentType': 'json',
				body: JSON.stringify({
					files: files
				})
			})
			.then(response => response.json())
			.then(project => resolve(project))
			.catch(error => reject(error));
		});
	
	
	}

}