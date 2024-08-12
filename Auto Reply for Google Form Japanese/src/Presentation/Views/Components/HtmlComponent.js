export class HtmlComponent{
    /** 
     * @protected
     * @type {HTMLElement} 
     */
    element;

    /**
     * @constructor
     * @param {string} tag 
     * @param {string} className 
     * @param {Object} attributes 
     * @param {string|HTMLElement} innerHTML 
     * @returns {HTMLElement}
     */
    constructor(tag, className, attributes, innerHTML = ""){
        this.element = this.createElement(tag,className,attributes,innerHTML);
    }

    /**
     * @protected
     * @param {string} tag 
     * @param {string} className 
     * @param {Object} attributes 
     * @param {string|HTMLElement} innerHTML 
     * @returns {HTMLElement}
     */
    createElement(tag, className, attributes, innerHTML) {
	    const element = document.createElement(tag);
	    if (className) element.className = className;
	    if (attributes) {
	        for (const key in attributes) {
	            if (attributes.hasOwnProperty(key)) {
	                element.setAttribute(key, attributes[key]);
	            }
	        }
	    }
	    if (innerHTML) element.innerText = innerHTML;
	    return element;
	}

    /** 
     * @return {HTMLElement}
     */
    getElement(){
        return this.element;
    }
}