import { HtmlComponent } from "./HtmlComponent.js";

export class UpdateButton extends HtmlComponent{

    constructor(){
		super(
			'button',
			'auto-reply-update-button',
			{
				style: 'display: block; background:none; border: none; margin: 16px;'
			}
		);
        // 更新ボタン
		const svgPath = "http://www.w3.org/2000/svg";
		const icon = document.createElementNS(svgPath, "svg");
		icon.setAttribute("xmlns", svgPath);
		icon.setAttribute("width", "20");
		icon.setAttribute("height", "20");
		icon.setAttribute("fill", "currentColor");
		icon.setAttribute("class", "bi bi-arrow-clockwise");
		icon.setAttribute("viewBox", "0 0 16 16");
		
		// 最初のパス要素を作成
		const path1 = document.createElementNS(svgPath, "path");
		path1.setAttribute("fill-rule", "evenodd");
		path1.setAttribute("d", "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z");
		
		// 2番目のパス要素を作成
		const path2 = document.createElementNS(svgPath, "path");
		path2.setAttribute("d", "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z");
		
		// パス要素をSVGに追加
		icon.appendChild(path1);
		icon.appendChild(path2);

		this.element.appendChild(icon);
		
    }

	activate(){
		this.element.disabled = false;
	}

	deactivate(){
		this.element.disabled = true;
	}
}