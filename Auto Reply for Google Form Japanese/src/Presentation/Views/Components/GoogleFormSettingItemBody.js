import { HtmlComponent } from "./HtmlComponent.js";

export class GoogleFormSettingItemBody extends HtmlComponent{

    /** @type {HTMLElement} */
    #expandedContentsContainer;

    constructor(){
        super('div', 'upsFvb', { 
            jsname: "I2egDd", style: "display:none" 
        });
		
		this.#expandedContentsContainer = this.createElement('div', 'xCAjrf oJeWuf',{});
		this.element.appendChild(this.#expandedContentsContainer);
		this.#expandedContentsContainer.id = "expandedContentContainer";
    }

    /**
     * 
     * @param {HtmlComponent} component 
     */
    addComponent(component){
        this.#expandedContentsContainer.appendChild(component.getElement());
    }
}