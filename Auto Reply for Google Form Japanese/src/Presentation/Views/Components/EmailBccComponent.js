import { AutoReplySettingComponent } from "./AutoReplySettingComponent.js";

export class EmailBccComponent extends AutoReplySettingComponent{

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
				name : 'bcc',
				disabled : true,
				style : 'width:100%; height:28px;',
				id : 'auto-reply-bcc-form'
			}
		);
		
		// BCCタイトル
		const bccTitle = this.createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		} , 'BCC（任意）');
		this.element.appendChild(bccTitle);
		this.element.appendChild(this.form);
		
    }

}