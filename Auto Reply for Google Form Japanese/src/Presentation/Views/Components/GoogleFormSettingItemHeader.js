import { ExpandArrow } from "./ExpandArrow.js";
import { HtmlComponent } from "./HtmlComponent.js";
import { SubExpandArrow } from "./SubExpandArrow.js";

export class GoogleFormSettingItemHeader extends HtmlComponent{

    constructor(titleText,subTitleText){
		super('div', 'ilZlpb',{});
				
		// タイトルコンテナ
		const titleContainer = this.createElement('div', 'qjigG');
		this.element.appendChild(titleContainer);
		
		// タイトル
		const title = this.createElement('div', '', {}, titleText);
		titleContainer.appendChild(title);
		
		// サブタイトル
		const subtitle = this.createElement('div', 'ApY6ue', {}, subTitleText);
		titleContainer.appendChild(subtitle);

		this.element.appendChild(new ExpandArrow().getElement());
		this.element.appendChild(new SubExpandArrow().getElement());
    }
}