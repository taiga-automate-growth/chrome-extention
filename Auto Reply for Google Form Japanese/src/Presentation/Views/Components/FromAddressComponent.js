import { AutoReplySettingComponent } from "./AutoReplySettingComponent.js";
import { UpdateButton } from "./UpdateButton.js";

export class FromAddressComponent extends AutoReplySettingComponent{

    /** @type {UpdateButton} */
    #updateButton;

	/** @type {Array<HTMLElement>} */
	#aliases = [];

    constructor(){
		super('div', 
			'auto-reply container',
			{
				style : 'width:100%;'
			},
			"",
			'div',
			"",
			{
				style : 'width:100%; height:84px; border:1px solid gainsboro; overflow:scroll; padding:0.5rem;',
			}
		);
		
		// 送信元アドレスタイトルコンテナ
		const fromAddressTitleContainer = this.createElement('div' , '' , {
		    style: 'display:flex; justify-content:space-between;'
		});
		
		this.element.appendChild(fromAddressTitleContainer);
		
		// 送信元アドレスタイトル
		const fromAddressTitle = this.createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		} ,  '送信元アドレス（必須）');
		fromAddressTitleContainer.appendChild(fromAddressTitle);

        // 更新ボタンコンテナ
		const updateButtonContainer = this.createElement('button' , 'auto-reply-form' , {
		    style : 'background:white; border:none;',
		    disabled : true
		});
		fromAddressTitleContainer.appendChild(updateButtonContainer);
		
		this.#updateButton = new UpdateButton();
		
		updateButtonContainer.appendChild(this.#updateButton.getElement());
		this.element.appendChild(this.form);
		
		// 送信元アドレス注釈
		const fromAddressAnotation = this.createElement('p' , '' , {
		    style : 'font-size:0.75em;'
		} , 
		    '※表示されるアドレスは現在ログイン中のGoogleアカウントGmailのエイリアスとして登録されているものに限ります。Gmailエイリアス登録は<a target="_brank" href="https://support.google.com/a/answer/33327?hl=ja">こちら<a>から'
		);
		this.element.appendChild(fromAddressAnotation);
		
    }

	getUpdateButton(){
		return this.#updateButton.getElement();
	}

	/**
	 * 
	 * @param {Array<string>} aliases - エイリアスの配列 
	 * @param {string} fromAddress - 送信元アドレス
	 */
	setValue(aliases,fromAddress){
		this.#aliases = [];
		while(this.form.hasChildNodes()){
			this.form.removeChild(this.form.firstChild)
		}

		for(let alias of aliases){

			const aliasContainer = this.createElement('div' , 'alias' , {
				style:'display:flex; align-items:center;'
			});
			this.#aliases.push(aliasContainer);
			this.form.appendChild(aliasContainer);            

			const radioButton = this.createElement('input' , '' , {
				type:'radio',
				name:'auto-reply-select-fromAddress',
				id:`alias-address-${alias}`,
				value: alias
			});

			aliasContainer.appendChild(radioButton);

			const label = this.createElement('label' , '' , {
				for:`alias-address-${alias}`,
				style: 'font-size:0.75rem;'
			},alias);

			aliasContainer.appendChild(label);
			if(alias === fromAddress) radioButton.checked = true;
		}

	}

	activate(){
		this.form.style.border = '1px solid black';
		if(this.#aliases.length === 0) return;
		for(let alias of this.#aliases){
            const radio = alias.children[0];
            radio.disabled = false;
            const label = alias.children[1];
            label.style.color = 'black';
        }
	}
	deactivate(){
		this.form.style.border = '1px solid gainsboro';
		if(this.#aliases.length === 0) return;
        for(let alias of this.#aliases){
            const radio = alias.children[0];
            radio.disabled = true;
            const label = alias.children[1];
            label.style.color = 'darkgray';
        }

	}
}