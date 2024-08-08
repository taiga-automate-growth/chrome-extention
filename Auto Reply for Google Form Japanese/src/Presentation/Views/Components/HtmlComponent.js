export class HtmlComponent{
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
}