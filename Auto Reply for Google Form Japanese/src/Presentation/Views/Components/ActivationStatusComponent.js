import { HtmlComponent } from "./HtmlComponent.js";

export class ActivationStatusComponent extends HtmlComponent{

    /** @type {HTMLElement} */
    #toggleButton;

    constructor(){

		super('div', 'oQr5db re5bTc', { 
			jsname: "Igk6W", 
            jscontroller: "w8B4Hd", 
            jsaction: "JIbuQc:e4mHGd(VVjirf);" 
        });
		
		const toggleLabel = this.createElement('label', '', { for: "i1000" });
		this.element.appendChild(toggleLabel);
		
		const toggleLabelText = this.createElement('div', 'NwkH8b', {}, '自動返信を有効にする');
		toggleLabel.appendChild(toggleLabelText);
		
		const toggleButtonContainer = this.createElement('div', 'Vz0N6b');
		this.element.appendChild(toggleButtonContainer);
		
		// 自動返信トグル
		this.#toggleButton = this.createElement('div', 'LsSwGf SWVgue Y4klN', {
		    id: "i1000",
		    jscontroller: "EcW08c",
		    jsaction: "keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;",
		    jsshadow: "",
		    jsname: "VVjirf",
		    'aria-label': "自動返信を有効にする",
		    tabindex: "0",
		    role: "checkbox",
		    'aria-checked': "false"
		});
		toggleButtonContainer.appendChild(this.#toggleButton);
		
		const toggleButtonInner1 = this.createElement('div', 'hh4xKf MLPG7');
		this.#toggleButton.appendChild(toggleButtonInner1);
		
		const toggleButtonInner2 = this.createElement('div', 'YGFwk MbhUzd');
		this.#toggleButton.appendChild(toggleButtonInner2);
		
		const toggleButtonInner3 = this.createElement('div', 'rbsY8b');
		this.#toggleButton.appendChild(toggleButtonInner3);
		
		const toggleButtonInner4 = this.createElement('div', 'E7QdY espmsb', { jsname: "IT5dJd" });
		toggleButtonInner3.appendChild(toggleButtonInner4);
		
    }

	activate(){
		this.#toggleButton.classList.add('N2RpBe');
		"LsSwGf SWVgue Y4klN N2RpBe"
	}

	getToggleButton(){
		return this.#toggleButton;
	}

	/**
	 * 
	 * @param {boolean} statusValue - 有効化状態。trueもしくはfalse
	 */
	setValue(statusValue){
		this.#toggleButton.setAttribute('aria-checked',statusValue);
	}

	getValue(){
		return this.#toggleButton.getAttribute('aria-checked');
	}
}