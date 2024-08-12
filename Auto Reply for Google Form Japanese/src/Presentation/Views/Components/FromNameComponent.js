import { AutoReplySettingComponent } from "./AutoReplySettingComponent.js";

export class FromNameComopnent extends AutoReplySettingComponent{

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
				id : 'auto-reply-fromName-#form'
			}
		);

		// 送信元表示名タイトル
		const fromNameTitle = this.createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		} , '送信元表示名（任意）');
		this.element.appendChild(fromNameTitle);
		this.element.appendChild(this.form);
		
    }
}