import { GoogleFormSettingItemBody } from "./GoogleFormSettingItemBody.js";
import { GoogleFormSettingItemHeader } from "./GoogleFormSettingItemHeader.js";
import { HtmlComponent } from "./HtmlComponent.js";

export class GoogleFormSettingItem extends HtmlComponent{
    /** @type {GoogleFormSettingItemHeader} */
    header;

    /** @type {GoogleFormSettingItemBody} */
    body;

    /**
     * 
     * @param {GoogleFormSettingItemHeader} header 
     * @param {GoogleFormSettingItemBody} body 
     */
    constructor(header, body){
        super('div', '', {
		    style: "padding: 30px 15px 6px 0;"
		});
		
        const subContainer = this.createElement('div', '', {
		    jsaction: "JIbuQc:Dl4LN(ix0Hvc),QqKrT(QCXj2);YvW3de:Dl4LN;",
		    jscontroller: "vB0Vle",
		    jsname: "oAAw5d"
		});
		this.element.appendChild(subContainer);
        subContainer.appendChild(header.getElement());
        subContainer.appendChild(body.getElement());
    }
}