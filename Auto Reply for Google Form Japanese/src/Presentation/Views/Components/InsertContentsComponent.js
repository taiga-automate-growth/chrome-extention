import { AutoReplySettingComponent } from "./AutoReplySettingComponent.js";
import { UpdateButton } from "./UpdateButton.js";

export class InsertContentsComponent extends AutoReplySettingComponent{

    /** @type {UpdateButton} */
    #updateButton;

	/** @type {Array<HTMLElement>} */
	#insertContents = [];

    constructor(){
		super(
			'div', 
			'auto-reply container', 
			{
				style : 'width:100%;'
			},
			"",
			'div', 
			"", 
			{
				style : 'width:100%; height:84px; border:1px solid gainsboro; overflow:scroll; padding:0.5rem;',
				id : 'insertContentsForm'
			}
		);

		// 差し込みコンテンツタイトルコンテナ
		const insertContentsTitleContainer = this.createElement('div' , '' , {
		    style: 'display:flex; justify-content:space-between;'
		})
		
		this.element.appendChild(insertContentsTitleContainer);
		
		// 差し込みコンテンツタイトル
		const insertContentsTitle = this.createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		}, '回答挿入オプション');
		insertContentsTitleContainer.appendChild(insertContentsTitle);
		
		// 差し込みコンテンツ更新ボタンコンテナ
		const updateButtonContainer = this.createElement('button' , 'auto-reply-form' , {
		    style : 'background:white; border:none;',
		    disabled : true
		});
		insertContentsTitleContainer.appendChild(updateButtonContainer);
		
		this.#updateButton = new UpdateButton();
		updateButtonContainer.appendChild(this.#updateButton.getElement());
		this.element.appendChild(this.form);
		
		// 差し込みコンテンツ注釈
		const insertContentsAnotation = this.createElement('p' , '' , {
		    style : 'font-size:0.75em;'
		} , 
		    '※件名と本文に回答を挿入できます。\n件名あるいは本文の挿入したい位置にカーソルを合わせてから、質問をクリックしてください。\n返信時はその質問に対する回答に差し替えられます。'
		);
		this.element.appendChild(insertContentsAnotation);
    }

	getUpdateButton(){
		return this.#updateButton.getElement();
	}
	/**
	 * 
	 * @param {Array<string>} insertContents 
	 * @param {Function} insertCallback 
	 */
	setValue(insertContents,insertCallback){
		this.#insertContents = [];

		while(this.form.hasChildNodes()){
			this.form.removeChild(this.form.firstChild);
		}
	
		// フォームの質問をループ
		for(let question of insertContents){
	
			// 質問タイトルをpタグで入れる
			const insertContent = this.createElement('p' , 'insert-content' , {
				style: 'font-size:0.75rem; margin-block-start:0; margin-block-end:0; cursor:pointer; border-bottom:0.5px solid gainsboro'
			} , `{{${question}}}`);
			this.form.appendChild(insertContent);
			this.#insertContents.push(insertContent);
			insertContent.addEventListener('click', (e) => insertCallback(e));
		}
	}

	/**
	 * 
	 * @return {Array<string>}
	 */
	getValue(){
		return this.#insertContents.map(insertContent => {
			return insertContent.innerText.replace(/[{}]/g,'');
		})
	}

	activate(){
		this.form.style.border = '1px solid black';
		if(this.#insertContents.length === 0) return;
		for(let insertContent of this.#insertContents){
            insertContent.style.color = 'black';
        }
		this.#updateButton.activate();
	}

	deactivate(){
        this.form.style.border = '1px solid gainsboro';
		if(this.#insertContents.length === 0) return;
		for(let insertContent of this.#insertContents){
            insertContent.style.color = 'darkgray';
        }
		this.#updateButton.deactivate();
	}
}