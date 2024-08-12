import { HtmlComponent } from "./HtmlComponent.js";

export class AutoReplySettingComponent extends HtmlComponent{
    /**
     * @protected  
     * @type {HTMLInputElement} 
     */
    form;
    
    /**
     * @constructor
     * @param {string} containerTag
     * @param {string} containerClassName
     * @param {Object} containerAttributes
     * @param {string} innerHTML
     * @param {string} tag 
     * @param {string} className 
     * @param {Object} attributes 
     * @param {string} innerHTML 
     * @returns {HTMLElement}
     */
    constructor(containerTag, containerClassName, containerAttributes, containerInnerHTML = "",tag,className,attributes,innerHTML = ""){
        super(containerTag,containerClassName,containerAttributes,containerInnerHTML);
        this.form = this.createElement(tag,className,attributes,innerHTML);
    }

    activate(){
        this.form.disabled = false;
    }

    deactivate(){
        this.form.disabled = true;
    }

    /**
     * 
     * @param {string} value 
     */
    setValue(value){
        this.form.value = value;
    }
    
    getValue(){
        return this.form.value;
    }
}