import { AutoReplySettingComponent } from "./AutoReplySettingComponent.js";

export class EmailBodyComponent extends AutoReplySettingComponent{

    constructor(){
		super(
			'div', 
			'auto-reply container',
			{
				style : 'width:100%;'
			},
			"",
			'textarea',
			'auto-reply-form', 
			{
				disabled : true,
				style : 'width:100%; height:128px; font-family: inherit;',
				id : 'auto-reply-body-#form'
			}
		);
		
		// 本文タイトル
		const bodyTitle = this.createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		}, '本文（必須）');
		this.element.appendChild(bodyTitle);
		this.element.appendChild(this.form);
    }


}