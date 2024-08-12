import { AutoReplySettingComponent } from "./AutoReplySettingComponent.js";

export class EmailCcComponent extends AutoReplySettingComponent{

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
				placeholder : '複数ある場合はカンマ区切りで入力してください',
				name : 'cc',
				disabled : true,
				style : 'width:100%; height:28px;',
				id : 'auto-reply-cc-form'
			}
		);

		// CCタイトル
		const ccTitle = this.createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		} , 'CC（任意）');
		this.element.appendChild(ccTitle);
		this.element.appendChild(this.form);
		
    }
}
