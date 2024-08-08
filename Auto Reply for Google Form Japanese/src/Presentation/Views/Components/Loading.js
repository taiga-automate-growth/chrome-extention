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
            style: 'background-color: lavender; width:100%; height:100%; display:none; justify-content:center; align-items:center; flex-direction:column;',
        });

        // ローダー（スピナー）を生成
        this.#loader = this.createElement('div', 'loader', {
            style: 'border:12px solid white; border-radius:50%; width:120px; height:120px;'
        })

        this.element.appendChild(this.#loader);

        // ロードメッセージを生成
        this.#loadingMessage = this.createElement('p', 'loading-message',{
            style: 'color:white;'
        },'ロード中です...')

        this.#loader.appendChild(this.#loadingMessage);
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