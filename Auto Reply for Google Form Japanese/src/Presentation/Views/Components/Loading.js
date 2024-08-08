import { HtmlComponent } from "./HtmlComponent.js";

export class Loading extends HtmlComponent{
    /** @type {HTMLElement} */
    element;

    /** @type {HTMLElement} */
    #loader;

    /** @type {HTMLElement} */
    #loadingMessage;

    /**
     * @constructor
     */
    constructor(){
        super();
        // ローディングコンテナを生成
        this.element = this.createElement('div','loading-container',{
            style: `
            background-color: violet; 
            width:100%; 
            height:100%; 
            display:none; 
            justify-content:center; 
            align-items:center; 
            flex-direction:column; 
            opacity:0.5; 
            position:fixed; 
            left:0; 
            top:0;
            `
        });

        // スピンアニメーションのための @keyframes を追加
        const styleElement = document.createElement('style');
        styleElement.innerText = `
            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `;
        document.head.appendChild(styleElement);

        // ローダー（スピナー）を生成
        this.#loader = this.createElement('div', 'loader', {
            style: 'border:12px solid white; border-radius:50%; width:120px; height:120px; border-top:12px solid deepskyblue; animation: spin 2s linear infinite;'
        })

        this.element.appendChild(this.#loader);

        // ロードメッセージを生成
        this.#loadingMessage = this.createElement('p', 'loading-message',{
            style: 'color:white;'
        },'ロード中です...')

        this.element.appendChild(this.#loadingMessage);
    }

    /**
     * 
     * @param {string} message 
     */
    start(message){
        this.element.style.display = 'flex';
        this.#loadingMessage.innerText = message;
    }

    end(){
        this.element.style.display = 'none';
    }
}