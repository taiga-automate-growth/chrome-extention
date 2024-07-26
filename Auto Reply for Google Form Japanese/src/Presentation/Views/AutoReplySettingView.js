class AutoReplySettingView{

	/** @type {HTMLElement} */
	#allitems;
	
	/** @type {HTMLElement} */
	#status;

	/** @type {HTMLElement} */
	#subject;
	
	/** @type {HTMLElement} */
	#body;
	
	/** @type {HTMLElement} */
	#updateInsertContentsButton;
	
	/** @type {HTMLElement} */
	#insertContents;
	
	/** @type {HTMLElement} */
	#updateAliasesButton;
	
	/** @type {HTMLElement} */
	#fromAddress;
	
	/** @type {HTMLElement} */
	#fromName;
	
	/** @type {HTMLElement} */
	#cc;
	
	/** @type {HTMLElement} */
	#bcc;
	
	/** @type {HTMLElement} */
	#createScriptButton;
	
	/** @type {HTMLElement} */
	#insertTarget;
	
	/** @constructor */
	constructor(){
	
		// 挿入する一つ上の項目のスタイルを変更する
		const topItem = document.getElementsByClassName("Vy2jue")[0];
		topItem.style.padding = "20px 15px 30px 0";
		topItem.style.borderBottom = "1px solid rgb(218, 220, 224)";
		
		// メインコンテナ
		this.#allitems = this.#createElement('div', '', {
		    style: "padding: 30px 15px 6px 0;"
		});
		
		// 全コンテンツコンテナ
		const contentContainer = this.#createElement('div', '', {
		    jsaction: "JIbuQc:Dl4LN(ix0Hvc),QqKrT(QCXj2);YvW3de:Dl4LN;",
		    jscontroller: "vB0Vle",
		    jsname: "oAAw5d"
		});
		this.#allitems.appendChild(contentContainer);
		
		// ヘッダーコンテナ
		const headerContainer = this.#createElement('div', 'ilZlpb');
		contentContainer.appendChild(headerContainer);
		
		// タイトルコンテナ
		const titleContainer = this.#createElement('div', 'qjigG');
		headerContainer.appendChild(titleContainer);
		
		// タイトル
		const title = this.#createElement('div', '', {}, '自動返信設定');
		titleContainer.appendChild(title);
		
		// サブタイトル
		const subtitle = this.#createElement('div', 'ApY6ue', {}, '自動返信の設定を管理できます');
		titleContainer.appendChild(subtitle);
		
		// エクスパンドアローコンテナ
		const expandArrowContainer = this.#createElement('div', 'SK5oQb', { jsname: "AvkpRc" });
		headerContainer.appendChild(expandArrowContainer);
		
		const expandArrowButton = this.#createElement('div', 'uArJ5e Y5FYJe cjq2Db', {
		    role: "button",
		    jscontroller: "VXdfxd",
		    jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;",
		    jsshadow: "",
		    jsname: "ix0Hvc",
		    'aria-label': "自動返信設定を表示",
		    tabindex: "0",
		    'aria-expanded': "false"
		});
		expandArrowContainer.appendChild(expandArrowButton);
		
		const expandArrowIcon1 = this.#createElement('div', 'PDXc1b MbhUzd', { jsname: "ksKsZd", style: "top: 12px; left: 12px; width: 0px; height: 0px;" });
		expandArrowButton.appendChild(expandArrowIcon1);
		
		const expandArrowSlot = this.#createElement('span', 'XuQwKc', { jsslot: "" });
		expandArrowButton.appendChild(expandArrowSlot);
		
		const expandArrowIcon2 = this.#createElement('span', 'GmuOkf');
		expandArrowSlot.appendChild(expandArrowIcon2);
		
		const expandArrowIcon3 = this.#createElement('div', 'foqfDc');
		expandArrowIcon2.appendChild(expandArrowIcon3);
		
		const expandArrowIcon4 = this.#createElement('div', 'Y0xAIe BNL9Bd NpcyEe-n5T17d-Bz112c-KoToPc-z5C9Gb-BvMwwf', { 'aria-hidden': "true" }, '&nbsp;');
		expandArrowIcon3.appendChild(expandArrowIcon4);
		
		const expandArrowIcon5 = this.#createElement('div', 'Y0xAIe ivmiLb NpcyEe-n5T17d-Bz112c-KoToPc-z5C9Gb-AhqUyc', { 'aria-hidden': "true" }, '&nbsp;');
		expandArrowIcon3.appendChild(expandArrowIcon5);
		
		// 謎のコンテナ
		const mysteryContainer = this.#createElement('div', 'SK5oQb', { jsname: "fW2qAb", style: "display:none" });
		headerContainer.appendChild(mysteryContainer);
		
		const mysteryButton = this.#createElement('div', 'uArJ5e Y5FYJe cjq2Db', {
		    role: "button",
		    jscontroller: "VXdfxd",
		    jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;",
		    jsshadow: "",
		    jsname: "QCXj2",
		    'aria-label': "自動返信設定を非表示",
		    tabindex: "0",
		    'aria-expanded': "false"
		});
		mysteryContainer.appendChild(mysteryButton);
		
		const mysteryIcon1 = this.#createElement('div', 'PDXc1b MbhUzd', { jsname: "ksKsZd", style: "top: 12px; left: 12px; width: 0px; height: 0px;" });
		mysteryButton.appendChild(mysteryIcon1);
		
		const mysterySlot = this.#createElement('span', 'XuQwKc', { jsslot: "" });
		mysteryButton.appendChild(mysterySlot);
		
		const mysteryIcon2 = this.#createElement('span', 'GmuOkf');
		mysterySlot.appendChild(mysteryIcon2);
		
		const mysteryIcon3 = this.#createElement('div', 'foqfDc');
		mysteryIcon2.appendChild(mysteryIcon3);
		
		const mysteryIcon4 = this.#createElement('div', 'Y0xAIe BNL9Bd NpcyEe-n5T17d-Bz112c-KoToPc-OCFbXc-BvMwwf', { 'aria-hidden': "true" }, '&nbsp;');
		mysteryIcon3.appendChild(mysteryIcon4);
		
		const mysteryIcon5 = this.#createElement('div', 'Y0xAIe ivmiLb NpcyEe-n5T17d-Bz112c-KoToPc-OCFbXc-AhqUyc', { 'aria-hidden': "true" }, '&nbsp;');
		mysteryIcon3.appendChild(mysteryIcon5);
		
		// 拡張時に表示されるコンテナ
		const expandedContainer = this.#createElement('div', 'upsFvb', { jsname: "I2egDd", style: "display:none" });
		contentContainer.appendChild(expandedContainer);
		
		const expandedInnerContainer = this.#createElement('div', 'xCAjrf oJeWuf');
		expandedContainer.appendChild(expandedInnerContainer);
		
		const expandedContentContainer = this.#createElement('div', '');
		expandedContentContainer.id = "expandedContentContainer";
		expandedInnerContainer.appendChild(expandedContentContainer);
		
		const expandedSubContainer = this.#createElement('div', '', { jsaction: "" });
		expandedContentContainer.appendChild(expandedSubContainer);
		
		// トグルボタンコンテナ
		const toggleContainer = this.#createElement('div', 'oQr5db re5bTc', { jsname: "Igk6W", jscontroller: "w8B4Hd", jsaction: "JIbuQc:e4mHGd(VVjirf);" });
		expandedSubContainer.appendChild(toggleContainer);
		
		const toggleLabel = this.#createElement('label', '', { for: "i1000" });
		toggleContainer.appendChild(toggleLabel);
		
		const toggleLabelText = this.#createElement('div', 'NwkH8b', {}, '自動返信を有効にする');
		toggleLabel.appendChild(toggleLabelText);
		
		const toggleButtonContainer = this.#createElement('div', 'Vz0N6b');
		toggleContainer.appendChild(toggleButtonContainer);
		
		// 自動返信トグル
		const toggleButton = this.#createElement('div', 'LsSwGf SWVgue Y4klN', {
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
		toggleButtonContainer.appendChild(toggleButton);
		
		const toggleButtonInner1 = this.#createElement('div', 'hh4xKf MLPG7');
		toggleButton.appendChild(toggleButtonInner1);
		
		const toggleButtonInner2 = this.#createElement('div', 'YGFwk MbhUzd');
		toggleButton.appendChild(toggleButtonInner2);
		
		const toggleButtonInner3 = this.#createElement('div', 'rbsY8b');
		toggleButton.appendChild(toggleButtonInner3);
		
		const toggleButtonInner4 = this.#createElement('div', 'E7QdY espmsb', { jsname: "IT5dJd" });
		toggleButtonInner3.appendChild(toggleButtonInner4);
		
		this.#status = toggleButton;
		toggleButton.addEventListener('click',)
		
		// 自動返信専用フォームのコンテナ
		const replyFormContainer = this.#createElement('div' , '' , {});
		
		// コンテナをオプションリストに追加
		expandedContentContainer.appendChild(replyFormContainer);
		
		// 差し込みコンテンツコンテナ
		const insertContentsContainer = this.#createElement('div' , 'auto-reply container' , {
		    style : 'width:100%;'
		});
		replyFormContainer.appendChild(insertContentsContainer);
		
		// 差し込みコンテンツタイトルコンテナ
		const insertContentsTitleContainer = this.#createElement('div' , '' , {
		    style: 'display:flex; justify-content:space-between;'
		})
		
		insertContentsContainer.appendChild(insertContentsTitleContainer);
		
		// 差し込みコンテンツタイトル
		const insertContentsTitle = this.#createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		}, '差し込みコンテンツ');
		insertContentsTitleContainer.appendChild(insertContentsTitle);
		
		// 差し込みコンテンツ更新ボタンコンテナ
		const insertContentsRefreshButtonContainer = this.#createElement('button' , 'auto-reply-form' , {
		    style : 'background:white; border:none;',
		    disabled : true
		});
		insertContentsTitleContainer.appendChild(insertContentsRefreshButtonContainer);
		
		// 更新ボタン
		const insertContentsRefreshSvgNS = "http://www.w3.org/2000/svg";
		const insertContentsRefreshButton = document.this.#createElementNS(insertContentsRefreshSvgNS, "svg");
		insertContentsRefreshButton.setAttribute("xmlns", insertContentsRefreshSvgNS);
		insertContentsRefreshButton.setAttribute("width", "16");
		insertContentsRefreshButton.setAttribute("height", "16");
		insertContentsRefreshButton.setAttribute("fill", "currentColor");
		insertContentsRefreshButton.setAttribute("class", "bi bi-arrow-clockwise");
		insertContentsRefreshButton.setAttribute("viewBox", "0 0 16 16");
		insertContentsRefreshButton.setAttribute("style", "margin-top:12px;")
		
		// 最初のパス要素を作成
		const insertContentsRefreshPath1 = document.this.#createElementNS(insertContentsRefreshSvgNS, "path");
		insertContentsRefreshPath1.setAttribute("fill-rule", "evenodd");
		insertContentsRefreshPath1.setAttribute("d", "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z");
		
		// 2番目のパス要素を作成
		const insertContentsRefreshPath2 = document.this.#createElementNS(insertContentsRefreshSvgNS, "path");
		insertContentsRefreshPath2.setAttribute("d", "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z");
		
		// パス要素をSVGに追加
		insertContentsRefreshButton.appendChild(insertContentsRefreshPath1);
		insertContentsRefreshButton.appendChild(insertContentsRefreshPath2);
		
		this.#updateInsertContentsButton = insertContentsRefreshButton;
		
		insertContentsRefreshButtonContainer.appendChild(insertContentsRefreshButton);
		
		// 差し込みコンテンツフォーム
		const insertContentsForm = this.#createElement('div' , '' , {
		    style : 'width:100%; height:84px; border:1px solid gainsboro; overflow:scroll; padding:0.5rem;',
		    id : 'insertContentsForm'
		});
		insertContentsContainer.appendChild(insertContentsForm);
		this.#insertContents = insertContentsForm;
		
		// 差し込みコンテンツ注釈
		const insertContentsAnotation = this.#createElement('p' , '' , {
		    style : 'font-size:0.75em;'
		} , 
		    '※件名と本文に回答を差し込めます。<br>件名あるいは本文の挿入したい位置にカーソルを合わせてから、差し込みコンテンツをクリックしてください'
		);
		insertContentsContainer.appendChild(insertContentsAnotation);
		
		// 件名コンテナ
		const subjectContainer = this.#createElement('div' , 'auto-reply container' , {
		    style : 'width:100%;'
		});
		
		// 件名コンテナをフォームコンテナに追加
		replyFormContainer.appendChild(subjectContainer);
		
		// 件名タイトル
		const subjectTitle = this.#createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		},'件名（必須）');
		
		// 件名タイトルを件名コンテナに追加
		subjectContainer.appendChild(subjectTitle);
		
		// 件名フォーム
		const subjectForm = this.#createElement('input' , 'auto-reply-form' ,{
		    type : 'text',
		    disabled : true,
		    style : 'width:100%; height:28px;',
		    id : 'auto-reply-subject-form'
		});
		
		// 件名フォームをコンテナに追加
		subjectContainer.appendChild(subjectForm);
		subjectForm.addEventListener('blur', this.#recordInsertTarget.bind(this));
		this.#subject = subjectForm;
		
		// 本文コンテナ
		const bodyContainer = this.#createElement('div' , 'auto-reply container', {
		    style : 'width:100%;'
		});
		replyFormContainer.appendChild(bodyContainer);
		
		// 本文タイトル
		const bodyTitle = this.#createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		}, '本文（必須）');
		bodyContainer.appendChild(bodyTitle);
		
		// 本文フォーム
		const bodyForm = this.#createElement('textarea' , 'auto-reply-form' , {
		    disabled : true,
		    style : 'width:100%; height:128px; font-family: inherit;',
		    id : 'auto-reply-body-form'
		});
		bodyContainer.appendChild(bodyForm);
		bodyForm.addEventListener('blur', this.#recordInsertTarget.bind(this));
		this.#body = bodyForm;
		
		// 送信元アドレスコンテナ
		const fromAddressContainer = this.#createElement('div' , 'auto-reply container' , {
		    style : 'width:100%;'
		});
		replyFormContainer.appendChild(fromAddressContainer);
		
		// 送信元アドレスタイトルコンテナ
		const fromAddressTitleContainer = this.#createElement('div' , '' , {
		    style: 'display:flex; justify-content:space-between;'
		});
		
		fromAddressContainer.appendChild(fromAddressTitleContainer);
		
		// 送信元アドレスタイトル
		const fromAddressTitle = this.#createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		} ,  '送信元アドレス（必須）');
		fromAddressTitleContainer.appendChild(fromAddressTitle);
		
		// 更新ボタンコンテナ
		const fromAddressRefreshButtonContainer = this.#createElement('button' , 'auto-reply-form' , {
		    style : 'background:white; border:none;',
		    disabled : true
		});
		fromAddressTitleContainer.appendChild(fromAddressRefreshButtonContainer);
		
		const fromAddressSvgNS = "http://www.w3.org/2000/svg";
		const fromAddressRefreshButton = document.this.#createElementNS(fromAddressSvgNS, "svg");
		fromAddressRefreshButton.setAttribute("xmlns", fromAddressSvgNS);
		fromAddressRefreshButton.setAttribute("width", "16");
		fromAddressRefreshButton.setAttribute("height", "16");
		fromAddressRefreshButton.setAttribute("fill", "currentColor");
		fromAddressRefreshButton.setAttribute("class", "bi bi-arrow-clockwise");
		fromAddressRefreshButton.setAttribute("viewBox", "0 0 16 16");
		fromAddressRefreshButton.setAttribute("style", "margin-top:12px;")
		
		// 最初のパス要素を作成
		const fromAddressPath1 = document.this.#createElementNS(fromAddressSvgNS, "path");
		fromAddressPath1.setAttribute("fill-rule", "evenodd");
		fromAddressPath1.setAttribute("d", "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z");
		
		// 2番目のパス要素を作成
		const fromAddressPath2 = document.this.#createElementNS(fromAddressSvgNS, "path");
		fromAddressPath2.setAttribute("d", "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z");
		
		// パス要素をSVGに追加
		fromAddressRefreshButton.appendChild(fromAddressPath1);
		fromAddressRefreshButton.appendChild(fromAddressPath2);
		
		this.#updateAliasesButton = fromAddressRefreshButton;
		
		fromAddressRefreshButtonContainer.appendChild(fromAddressRefreshButton);
		
		// 送信元アドレスフォーム
		const fromAddressForm = this.#createElement('div' , '' , {
		    style : 'width:100%; height:84px; border:1px solid gainsboro; overflow:scroll; padding:0.5rem;',
		});
		fromAddressContainer.appendChild(fromAddressForm);
		this.#fromAddress = fromAddressForm;
		
		// 送信元アドレス注釈
		const fromAddressAnotation = this.#createElement('p' , '' , {
		    style : 'font-size:0.75em;'
		} , 
		    '※表示されるアドレスは現在ログイン中のGoogleアカウントGmailのエイリアスとして登録されているものに限ります。Gmailエイリアス登録は<a target="_brank" href="https://support.google.com/a/answer/33327?hl=ja">こちら<a>から'
		);
		fromAddressContainer.appendChild(fromAddressAnotation);
		
		// 送信元表示名コンテナ
		const fromNameContainer = this.#createElement('div' , 'auto-reply container' , {
		    style : 'width:100%;'
		});
		replyFormContainer.appendChild(fromNameContainer);
		
		// 送信元表示名タイトル
		const fromNameTitle = this.#createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		} , '送信元表示名（任意）');
		fromNameContainer.appendChild(fromNameTitle);
		
		// 送信元表示名フォーム
		const fromNameForm = this.#createElement('input' , 'auto-reply-form' , {
		    type : 'text',
		    disabled : true,
		    style : 'width:100%; height:28px;',
		    id : 'auto-reply-fromName-form'
		});
		fromNameContainer.appendChild(fromNameForm);
		this.#fromName = fromNameForm;
		
		// CCコンテナ
		const ccContaiter = this.#createElement('div' , 'auto-reply container' , {
		    style : 'width:100%;'
		});
		replyFormContainer.appendChild(ccContaiter);
		
		// CCタイトル
		const ccTitle = this.#createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		} , 'CC（任意）');
		ccContaiter.appendChild(ccTitle);
		
		// CCフォーム
		const ccForm = this.#createElement('input' , 'auto-reply-form' , {
		    placeholder : '複数ある場合はカンマ区切りで入力してください',
		    name : 'cc',
		    disabled : true,
		    style : 'width:100%; height:28px;',
		    id : 'auto-reply-cc-form'
		});
		ccContaiter.appendChild(ccForm);
		this.#cc = ccForm;
		
		// BCCコンテナ
		const bccContainer = this.#createElement('div' , 'auto-reply container' , {
		    style : 'width:100%;'
		});
		replyFormContainer.appendChild(bccContainer);
		
		// BCCタイトル
		const bccTitle = this.#createElement('p' , '' , {
		    style : 'margin-block-end:4px;'
		} , 'BCC（任意）');
		bccContainer.appendChild(bccTitle);
		
		// BCCフォーム
		const bccForm = this.#createElement('input' , 'auto-reply-form' , {
		    placeholder : '複数ある場合はカンマ区切りで入力してください',
		    name : 'bcc',
		    disabled : true,
		    style : 'width:100%; height:28px;',
		    id : 'auto-reply-bcc-form'
		});
		bccContainer.appendChild(bccForm);
		this.#bcc = bccForm;
		
		
		// ボタンコンテナ
		const buttonContainer = this.#createElement('div', '', {
		    style: 'display:flex; width:100%; justify-content:center; margin-top:1rem'
		})
		replyFormContainer.appendChild(buttonContainer);
		
		// スクリプト生成ボタン
		const createScriptButton = this.#createElement('button' , 'auto-reply-form' , {
		    disabled : true,
		    style: 'border:none; background:darkviolet; color:white; border-radius:4px; padding-top:0.5rem; padding-bottom:0.5rem; padding-left:1rem; padding-right:1rem; cursor:pointer'
		} , '完了');
		buttonContainer.appendChild(createScriptButton);
		this.#createScriptButton = createScriptButton;
		

	}
	
	#this.#createElement(tag, className, attributes, innerHTML) {
	    const element = document.this.#createElement(tag);
	    if (className) element.className = className;
	    if (attributes) {
	        for (const key in attributes) {
	            if (attributes.hasOwnProperty(key)) {
	                element.setAttribute(key, attributes[key]);
	            }
	        }
	    }
	    if (innerHTML) element.innerHTML = innerHTML;
	    return element;
	}
	
	#recordInsertTarget(e){
		this.#insertTarget = e.currentTarget;
	}
	
	#insert(e){
		const active = this.#status.getAttribute('aria-checked');
	    if(active === "false" || this.#insertTarget === undefined) return;
	    const insertText = e.currentTarget.innerText;
	    this.#insertTarget.focus();
	    this.#insertTarget.setRangeText(insertText, this.#insertTarget.selectionStart, this.#insertTarget.value.length, 'end');
	    this.#insertTarget.selectionStart += insertText.length;
	
	}
	
	/**
	 * @param {activateCallback} activateCallback
	 * @param {deactiavteCallback} deactivateCallback
	 * @param {createScriptCallback} createScriptCallback
	 * @param {updateInsertContentsCallback} updateInsertContentsCallback
	 * @param {updateAliasesCallback} updateAliasesCallback
	 */
	view(
		activateCallback, 
		deactivateCallback, 
		createScriptCallback, 
		updateInsertContentsCallback, 
		updateAliasesCallback
	){
		
		// 挿入元の親となるDOMを取得
		const parent = document.getElementsByClassName('aDRHlc')[0];
		
		const formId = this.#getFormId();
		
		// 自動返信トグルのクリックイベントにリスナーを追加
		this.#status.addEventListener('click', function(){
			const activation = this.getAttribute('aria-checked');
			
			if(activation === 'true'){
				deactivateCallback(formId);
			}else{
				activateCallback(formId);
			}
		});
		
		// スクリプト作成ボタンのクリックイベントにリスナーを追加
		this.#createScript.addEventListener('click', function(){
			createScriptCallback(this.getInputData(),formId);
		});
		
		// 差し込みコンテンツ更新ボタンのクリックイベントにリスナーを追加
		this.#updateInsertContentsButton.addEventListener('click', function(){
			updateInsertContentsCallback(formId);
		});
		
		// エイリアス更新ボタンのクリックイベントにリスナーを追加
		this.#updateAliasesButton.addEventListener('click', function(){
			updateAliasesCallback(formId);
		});
		
		// 自動返信設定フォームを追加
		parent.appendChild(this.#allitems);
	
	}
	
	/**
	 * @callback activateCallback
	 * @param {string} formId
	 */
	 
	/**
	 * @callback deactivateCallback
	 * @param {string} formId
	 */
	 
	/**
	 * @callback createScriptCallback
	 * @param {object} inputData 画面に入力された情報
	 * @param {string} formId
	 */
	 
	/**
	 * @callback updateInsertContentsCallback
	 * @param {string} formId
	 */
	 
	/**
	 * @callback updateAliasesCallback
	 * @param {string} formId
	 */
	 
	
	getFormId(){
		const url = location.pathname;
		
		// 正規表現を使ってURLからフォームIDを抽出
	    const regex = /\/forms\/d\/([a-zA-Z0-9_-]+)/;
	    const match = url.match(regex);
	    
	    // マッチが見つかった場合はフォームIDを返す
	    if (match && match[1]) {
	      return match[1];
	    } else {
	      throw new Error("Form ID not found in the URL");
	    }
	}
	
	/** @param {object} datas*/
	update(datas){
		if('status' in datas && datas.status !== undefined){
			this.#status.setAttribute('aria-checked',datas.status);
		}
		
		if('subject' in datas && datas.subject !== undefined){
			this.#subject.value = datas.subject;
		}
		
		if('body' in datas && datas.body !== undefined){
			this.#body.value = datas.body;
		}
		
		if('aliases' in datas && datas.aliases !== undefined){
			this.#updateAliases(datas.aliases);
			
		}
		
		if('fromName' in datas && datas.fromName !== undefined){
			this.#fromName.value = datas.fromName;
		}
		
		if('cc' in datas && datas.cc !== undefined){
			this.#cc.value = datas.cc;
		}
		
		if('bcc' in datas && datas.bcc !== undefined){
			this.#bcc.value = datas.bcc;
		}
		
		if('insertContents' in datas && datas.insertContents !== undefined){
			this.#updateInsertContents(datas.insertContents);
		}
	}
	
	activate(){
		const forms = document.getElementsByClassName('auto-reply-form');
		for(let form of forms){
            form.disabled = false;
        }

        // 差し込みコンテンツと送信元アドレスのフォームを有効にする
        this.#insertContents.style.border = '1px solid black';
        this.#fromAddress.style.border = '1px solid black';

        const insertContents = document.getElementsByClassName('insert-content');
        for(let insertContent of insertContents){
            insertContent.style.color = 'black';
        }

        const aliases = document.getElementsByClassName('alias');
        for(let alias of aliases){
            const radio = alias.children[0];
            radio.disabled = false;
            const label = alias.children[1];
            label.style.color = 'black';
        }
	}
	
	/** @return {object} */
	getInputData(){
		let fromAddress;
		
		let aliases = document.getElementsByClassName('alias');
		aliases = Array.prototype.map.call(aliases,alias => {
			const radio = alias.children[0];
            if(radio.checked) fromAddress = radio.value;
            return radio.value;
		});
		
		const insertContents = Array.prototype.map.call(
			document.getElementsByClassName('insert-content'),
			insertContent => {
				return insertContent.value.replace(/[{}]/g,'');
			}
		);
        
		return {
			subject: this.#subject.value,
			body: this.#body.value,
			fromAddress: fromAddress,
			fromName: this.#fromName.value,
			cc: this.#cc.value,
			bcc: this.#bcc.value,
			insertContents: insertContents
			aliases : aliases
		}
	}
	
	createScriptDone(){
	
	}
	
	deactivate(){
		const forms = document.getElementsByClassName('auto-reply-form');
		for(let form of forms){
            form.disabled = true;
        }

        // 差し込みコンテンツと送信元アドレスのフォームを無効にする
        this.#insertContents.style.border = '1px solid gainsboro';
        this.fromAddress.style.border = '1px solid gainsboro';

        const insertContents = document.getElementsByClassName('insert-content');
        for(let insertContent of insertContents){
            insertContent.style.color = 'darkgray';
        }

        const aliases = document.getElementsByClassName('alias');
        for(let alias of aliases){
            const radio = alias.children[0];
            radio.disabled = true;
            const label = alias.children[1];
            label.style.color = 'darkgray';
        }
	}
	
	/** @param {Array<string>} insertContents */
	updateInsertContents(insertContents){
		while(this.#insertContents.hasChildNodes()){
	        this.#insertContents.removeChild(this.#insertContents.firstChild);
	    }
	
	    // フォームの質問をループ
	    for(let question of insertContents){
	
	        // 質問タイトルをpタグで入れる
	        const title = question.title;
	        const insertContent = this.#createElement('p' , 'insert-content' , {
	            style: 'font-size:0.75rem; margin-block-start:0; margin-block-end:0; cursor:pointer; border-bottom:0.5px solid gainsboro'
	        } , `{{${title}}}`);
	        this.#insertContents.appendChild(insertContent);
	        insertContent.addEventListener('click', this.#insert.bind(this));
	    }
	}
	
	/** @param {Array<string>} aliases */
	updateAliases(aliases){
		while(this.#fromAddress.hasChildNodes()){
	        this.#fromAddress.removeChild(this.#fromAddress.firstChild);
	    }
	    
		for(let alias of aliases){

	        // ラジオボタンを追加
	        const aliasContainer = this.#createElement('div' , 'alias' , {
	            style:'display:flex; align-items:center;'
	        });
	
	        this.#fromAddress.appendChild(aliasContainer);            
			
			const email = alias.sendAsEmail;
	        const radioButton = this.#createElement('input' , '' , {
	            type:'radio',
	            name:'auto-reply-select-fromAddress',
	            id:`alias-address-${email}`,
	            value: email
	        });
	
	        aliasContainer.appendChild(radioButton);
	        if(email === this.#fromAddress.value) radioButton.checked = true;
	
	        const label = this.#createElement('label' , '' , {
	            for:`alias-address-${email}`,
	            style: 'font-size:0.75rem;'
	        },email);
	
	        aliasContainer.appendChild(label);
	    }
	}	
	
}