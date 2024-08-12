import { ActivationStatusComponent } from "./Components/ActivationStatusComponent.js";
import { ButtonContainerComponent } from "./Components/ButtonContainerComponent.js";
import { CreateScriptButtonComponent } from "./Components/CreateScriptButtonComponent.js";
import { EmailBccComponent } from "./Components/EmailBccComponent.js";
import { EmailBodyComponent } from "./Components/EmailBodyComponent.js";
import { EmailCcComponent } from "./Components/EmailCcComponent.js";
import { EmailSubjectComponent } from "./Components/EmailSubjectComponent.js";
import { FromAddressComponent } from "./Components/FromAddressComponent.js";
import { FromNameComopnent } from "./Components/FromNameComponent.js";
import { GoogleFormSettingItem } from "./Components/GoogleFormSettingItem.js";
import { GoogleFormSettingItemBody } from "./Components/GoogleFormSettingItemBody.js";
import { GoogleFormSettingItemHeader } from "./Components/GoogleFormSettingItemHeader.js";
import { InsertContentsComponent } from "./Components/InsertContentsComponent.js";
import { Loading } from "./Components/Loading.js";

export class AutoReplySettingView{

	/** @type {GoogleFormSettingItem} */
	#settingItem;
	
	/** @type {ActivationStatusComponent} */
	#status;

	/** @type {EmailSubjectComponent} */
	#subject;
	
	/** @type {EmailBodyComponent} */
	#body;
	
	/** @type {InsertContentsComponent} */
	#insertContents;
	
	/** @type {FromAddressComponent} */
	#fromAddress;
	
	/** @type {FromNameComopnent} */
	#fromName;
	
	/** @type {EmailCcComponent} */
	#cc;
	
	/** @type {EmailBccComponent} */
	#bcc;
	
	/** @type {CreateScriptButtonComponent} */
	#createScriptButton;
	
	/** @type {HTMLElement} */
	#insertTarget;

	/** @type {Loading} */
	#loading;

	/** @constructor */
	constructor(){
	
		// 挿入する一つ上の項目のスタイルを変更する
		const topItem = document.getElementsByClassName("Vy2jue")[0];
		topItem.style.padding = "20px 15px 30px 0";
		topItem.style.borderBottom = "1px solid rgb(218, 220, 224)";
		
		const settingHeader = new GoogleFormSettingItemHeader('自動返信設定','自動返信プログラムを生成する設定を管理できます。');
		const settingBody = new GoogleFormSettingItemBody();
		this.#settingItem = new GoogleFormSettingItem(settingHeader,settingBody);
		
		this.#status = new ActivationStatusComponent();
		settingBody.addComponent(this.#status);

		this.#subject = new EmailSubjectComponent();
		settingBody.addComponent(this.#subject);

		this.#body = new EmailBodyComponent();
		settingBody.addComponent(this.#body);

		this.#insertContents = new InsertContentsComponent();
		settingBody.addComponent(this.#insertContents);

		this.#fromAddress = new FromAddressComponent();
		settingBody.addComponent(this.#fromAddress);

		this.#fromName = new FromNameComopnent();
		settingBody.addComponent(this.#fromName);

		this.#cc = new EmailCcComponent();
		settingBody.addComponent(this.#cc);

		this.#bcc = new EmailBccComponent();
		settingBody.addComponent(this.#bcc);

		const buttonContainer = new ButtonContainerComponent();
		settingBody.addComponent(buttonContainer);

		this.#createScriptButton = new CreateScriptButtonComponent();
		buttonContainer.addButton(this.#createScriptButton);
		
		this.#loading = new Loading();
	}
	
	#createElement(tag, className, attributes, innerHTML) {
	    const element = document.createElement(tag);
	    if (className) element.className = className;
	    if (attributes) {
	        for (const key in attributes) {
	            if (attributes.hasOwnProperty(key)) {
	                element.setAttribute(key, attributes[key]);
	            }
	        }
	    }
	    if (innerHTML) element.innerText = innerHTML;
	    return element;
	}
	
	#recordInsertTarget(e){
		this.#insertTarget = e.currentTarget;
	}
	
	#insert(e){
		const active = this.#status.getAttribute('aria-checked');
	    if(active === "false" || this.#insertTarget === undefined) return;
	    const insertText = e.currentTarget.innerText;
	    this.#insertTarget.focus();
	    this.#insertTarget.setRangeText(insertText, this.#insertTarget.selectionStart, this.#insertTarget.value.length, 'end');
	    this.#insertTarget.selectionStart += insertText.length;
	
	}
	
	/**
	 * @param {Boolean} status - 有効化状態
	 * @param {activateCallback} activateCallback
	 * @param {deactivateCallback} deactivateCallback
	 * @param {createScriptCallback} createScriptCallback
	 * @param {updateInsertContentsCallback} updateInsertContentsCallback
	 * @param {updateAliasesCallback} updateAliasesCallback
	 */
	insert(
		status,
		activateCallback, 
		deactivateCallback, 
		createScriptCallback, 
		updateInsertContentsCallback, 
		updateAliasesCallback
	){
		
		// 挿入元の親となるDOMを取得
		const parent = document.getElementsByClassName('aDRHlc')[0];
		
		const formId = this.getFormId();

		if(status) this.#status.activate();
		
		// 自動返信トグルのクリックイベントにリスナーを追加
		this.#status.getToggleButton().addEventListener('click', (e) => {
			const activation = e.currentTarget.getAttribute('aria-checked');
			console.log(activation);
			if(activation === 'true'){
				deactivateCallback(formId);
				this.deactivate();
			}else{
				activateCallback(formId);
				this.activate();
			}
		});
		
		// スクリプト作成ボタンのクリックイベントにリスナーを追加
		this.#createScriptButton.getElement().addEventListener('click', () => {
			console.log(this.getInputData());
			createScriptCallback(formId,this.getInputData());
		});
		
		// 差し込みコンテンツ更新ボタンのクリックイベントにリスナーを追加
		this.#insertContents.getUpdateButton().addEventListener('click', function(){
			updateInsertContentsCallback(formId);
		});
		
		// エイリアス更新ボタンのクリックイベントにリスナーを追加
		this.#fromAddress.getUpdateButton().addEventListener('click', function(){
			updateAliasesCallback(formId);
		});
		
		// 自動返信設定フォームを追加
		parent.appendChild(this.#settingItem.getElement());

		const loadingParent = document.getElementsByClassName('KP7TGc RjsPE')[0];
		loadingParent.appendChild(this.#loading.getElement());
	
	}
	
	/**
	 * @callback activateCallback
	 * @param {string} formId
	 */
	 
	/**
	 * @callback deactivateCallback
	 * @param {string} formId
	 */
	 
	/**
	 * @callback createScriptCallback
	 * @param {object} inputData 画面に入力された情報
	 * @param {string} formId
	 */
	 
	/**
	 * @callback updateInsertContentsCallback
	 * @param {string} formId
	 */
	 
	/**
	 * @callback updateAliasesCallback
	 * @param {string} formId
	 */
	 
	
	getFormId(){
		const url = location.pathname;
		
		// 正規表現を使ってURLからフォームIDを抽出
	    const regex = /\/forms\/d\/([a-zA-Z0-9_-]+)/;
	    const match = url.match(regex);
	    
	    // マッチが見つかった場合はフォームIDを返す
	    if (match && match[1]) {
	      return match[1];
	    } else {
	      throw new Error("Form ID not found in the URL");
	    }
	}
	
	/** @param {object} datas*/
	update(datas){
		console.log(datas);
		if('status' in datas && datas.status !== ""){
			this.#status.setValue(datas.status);
		}
		
		if('subject' in datas && datas.subject !== ""){
			this.#subject.setValue(datas.subject);
		}
		
		if('body' in datas && datas.body !== ""){
			this.#body.setValue(datas.body);
		}
		
		if('aliases' in datas && datas.aliases !== ""){
			this.#fromAddress.setValue(datas.aliases,datas.fromAddress);
		}
		
		if('fromName' in datas && datas.fromName !== ""){
			this.#fromName.setValue(datas.fromName);
		}
		
		if('cc' in datas && datas.cc !== ""){
			this.#cc.setValue(datas.cc);
		}
		
		if('bcc' in datas && datas.bcc !== ""){
			this.#bcc.setValue(datas.bcc);
		}
		
		if('insertContents' in datas && datas.insertContents !== ""){
			this.#insertContents.setValue(datas.insertContents,this.#insert.bind(this));
		}
	}
	
	activate(){
		this.#subject.activate();
		this.#body.activate();
		this.#insertContents.activate();
		this.#fromAddress.activate();
		this.#fromName.activate();
		this.#cc.activate();
		this.#bcc.activate();
	}

	deactivate(){
		this.#subject.deactivate();
		this.#body.deactivate();
		this.#insertContents.deactivate();
		this.#fromAddress.deactivate();
		this.#fromName.deactivate();
		this.#cc.deactivate();
		this.#bcc.deactivate();
	}

	/** @return {object} */
	getInputData(){
		const collectMailAddressConfigContainer = document.getElementsByClassName('uZH9Ac')[0];
		console.log(collectMailAddressConfigContainer);
		const collectMailAddressConfigListBox = collectMailAddressConfigContainer.children[1];
		const collectMailConfig = collectMailAddressConfigListBox.getElementsByClassName('MocG8c HZ3kWc  LMgvRb KKjvXb')[0];
		
		let fromAddress;
		
		let aliases = document.getElementsByClassName('alias');
		aliases = Array.prototype.map.call(aliases,alias => {
			const radio = alias.children[0];
            if(radio.checked) fromAddress = radio.value;
            return radio.value;
		});
		
		const insertContents = Array.prototype.map.call(
			document.getElementsByClassName('insert-content'),
			insertContent => {
				console.log(insertContent);
				return insertContent.innerText.replace(/[{}]/g,'');
			}
		);
        
		return {
			formId: this.getFormId(),
			status: this.#status.getAttribute('aria-checked'),
			emailAddressCollectionType: collectMailConfig.innerText,
			subject: this.#subject.value,
			body: this.#body.value,
			fromAddress: fromAddress,
			fromName: this.#fromName.value,
			cc: this.#cc.value,
			bcc: this.#bcc.value,
			insertContents: insertContents,
			aliases : aliases
		}
	}
	
	createScriptDone(scriptId){
		window.alert('プログラムを自動で生成しました。\nトリガーの設定が必要です。設定画面に移動してもよろしいですか？')
		window.open(`https://script.google.com/u/0/home/projects/${scriptId}/triggers`, '_blank');
	}
	

	/**
	 * 
	 * @param {string} message 
	 */
	loadStart(message){
		this.#loading.start(message);
	}

	loadEnd(){
		this.#loading.end();
	}
	
}