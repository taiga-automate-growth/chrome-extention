import { AutoReplySettingComponent } from "./AutoReplySettingComponent.js";

export class EmailSubjectComponent extends AutoReplySettingComponent{

    constructor(){
		super(
			'div', 
			'auto-reply container',
			{
		    	style : 'width:100%;'
			},
			"",
			'input', 
			'auto-reply-form',
			{
				type : 'text',
				disabled : true,
				style : 'width:100%; height:28px;',
				id : 'auto-reply-subject-#form'
			}
		);
		
		// 件名タイトル
		const subjectTitle = this.createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		},'件名（必須）');
		
		// 件名タイトルを件名コンテナに追加
		this.element.appendChild(subjectTitle);
		this.element.appendChild(this.form);
    }

}