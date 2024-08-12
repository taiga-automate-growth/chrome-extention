import { HtmlComponent } from "./HtmlComponent.js";

export class ButtonContainerComponent extends HtmlComponent{

    constructor(){
        super('div', '', {
		    style: 'display:flex; width:100%; justify-content:center; margin-top:1rem'
		});
    }

    /**
     * @param {HtmlComponent} button
     */
    addButton(button){
        this.element.appendChild(button.getElement());
    }
}