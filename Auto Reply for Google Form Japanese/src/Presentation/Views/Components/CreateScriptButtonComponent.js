import { HtmlComponent } from "./HtmlComponent.js";

export class CreateScriptButtonComponent extends HtmlComponent{

    constructor(){
        super('button' , 'auto-reply-form' , {
		    disabled : true,
		    style: 'border:none; background:darkviolet; color:white; border-radius:4px; padding-top:0.5rem; padding-bottom:0.5rem; padding-left:1rem; padding-right:1rem; cursor:pointer'
		} , '完了');
    }
}