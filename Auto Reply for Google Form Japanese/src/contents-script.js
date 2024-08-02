import { AutoReplySettingView } from "./Presentation/Views/AutoReplySettingView.js";
import { AutoReplySettingController } from "./Presentation/Controllers/AutoReplySettingController.js";
const view = new AutoReplySettingView();
new AutoReplySettingController(view).index();
// new BackgroundMediator();
// // 要素を作成するヘルパー関数
// function createElement(tag, className, attributes, innerHTML) {
//     const element = document.createElement(tag);
//     if (className) element.className = className;
//     if (attributes) {
//         for (const key in attributes) {
//             if (attributes.hasOwnProperty(key)) {
//                 element.setAttribute(key, attributes[key]);
//             }
//         }
//     }
//     if (innerHTML) element.innerHTML = innerHTML;
//     return element;
// }

// // 挿入する一つ上の項目のスタイルを変更する
// const displayConfig = document.getElementsByClassName("Vy2jue")[0];
// displayConfig.style.padding = "20px 15px 30px 0";
// displayConfig.style.borderBottom = "1px solid rgb(218, 220, 224)";

// // 挿入元の親となるDOMを取得
// const parent = document.getElementsByClassName('aDRHlc')[0];

// // メインコンテナ
// const mainContainer = createElement('div', '', {
//     style: "padding: 30px 15px 6px 0;"
// });

// // 作成した要素をbodyに追加
// parent.appendChild(mainContainer);

// // 全コンテンツコンテナ
// const contentContainer = createElement('div', '', {
//     jsaction: "JIbuQc:Dl4LN(ix0Hvc),QqKrT(QCXj2);YvW3de:Dl4LN;",
//     jscontroller: "vB0Vle",
//     jsname: "oAAw5d"
// });
// mainContainer.appendChild(contentContainer);

// // ヘッダーコンテナ
// const headerContainer = createElement('div', 'ilZlpb');
// contentContainer.appendChild(headerContainer);

// // タイトルコンテナ
// const titleContainer = createElement('div', 'qjigG');
// headerContainer.appendChild(titleContainer);

// // タイトル
// const title = createElement('div', '', {}, '自動返信設定');
// titleContainer.appendChild(title);

// // サブタイトル
// const subtitle = createElement('div', 'ApY6ue', {}, '自動返信の設定を管理できます');
// titleContainer.appendChild(subtitle);

// // エクスパンドアローコンテナ
// const expandArrowContainer = createElement('div', 'SK5oQb', { jsname: "AvkpRc" });
// headerContainer.appendChild(expandArrowContainer);

// const expandArrowButton = createElement('div', 'uArJ5e Y5FYJe cjq2Db', {
//     role: "button",
//     jscontroller: "VXdfxd",
//     jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;",
//     jsshadow: "",
//     jsname: "ix0Hvc",
//     'aria-label': "自動返信設定を表示",
//     tabindex: "0",
//     'aria-expanded': "false"
// });
// expandArrowContainer.appendChild(expandArrowButton);

// const expandArrowIcon1 = createElement('div', 'PDXc1b MbhUzd', { jsname: "ksKsZd", style: "top: 12px; left: 12px; width: 0px; height: 0px;" });
// expandArrowButton.appendChild(expandArrowIcon1);

// const expandArrowSlot = createElement('span', 'XuQwKc', { jsslot: "" });
// expandArrowButton.appendChild(expandArrowSlot);

// const expandArrowIcon2 = createElement('span', 'GmuOkf');
// expandArrowSlot.appendChild(expandArrowIcon2);

// const expandArrowIcon3 = createElement('div', 'foqfDc');
// expandArrowIcon2.appendChild(expandArrowIcon3);

// const expandArrowIcon4 = createElement('div', 'Y0xAIe BNL9Bd NpcyEe-n5T17d-Bz112c-KoToPc-z5C9Gb-BvMwwf', { 'aria-hidden': "true" }, '&nbsp;');
// expandArrowIcon3.appendChild(expandArrowIcon4);

// const expandArrowIcon5 = createElement('div', 'Y0xAIe ivmiLb NpcyEe-n5T17d-Bz112c-KoToPc-z5C9Gb-AhqUyc', { 'aria-hidden': "true" }, '&nbsp;');
// expandArrowIcon3.appendChild(expandArrowIcon5);

// // 謎のコンテナ
// const mysteryContainer = createElement('div', 'SK5oQb', { jsname: "fW2qAb", style: "display:none" });
// headerContainer.appendChild(mysteryContainer);

// const mysteryButton = createElement('div', 'uArJ5e Y5FYJe cjq2Db', {
//     role: "button",
//     jscontroller: "VXdfxd",
//     jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;",
//     jsshadow: "",
//     jsname: "QCXj2",
//     'aria-label': "自動返信設定を非表示",
//     tabindex: "0",
//     'aria-expanded': "false"
// });
// mysteryContainer.appendChild(mysteryButton);

// const mysteryIcon1 = createElement('div', 'PDXc1b MbhUzd', { jsname: "ksKsZd", style: "top: 12px; left: 12px; width: 0px; height: 0px;" });
// mysteryButton.appendChild(mysteryIcon1);

// const mysterySlot = createElement('span', 'XuQwKc', { jsslot: "" });
// mysteryButton.appendChild(mysterySlot);

// const mysteryIcon2 = createElement('span', 'GmuOkf');
// mysterySlot.appendChild(mysteryIcon2);

// const mysteryIcon3 = createElement('div', 'foqfDc');
// mysteryIcon2.appendChild(mysteryIcon3);

// const mysteryIcon4 = createElement('div', 'Y0xAIe BNL9Bd NpcyEe-n5T17d-Bz112c-KoToPc-OCFbXc-BvMwwf', { 'aria-hidden': "true" }, '&nbsp;');
// mysteryIcon3.appendChild(mysteryIcon4);

// const mysteryIcon5 = createElement('div', 'Y0xAIe ivmiLb NpcyEe-n5T17d-Bz112c-KoToPc-OCFbXc-AhqUyc', { 'aria-hidden': "true" }, '&nbsp;');
// mysteryIcon3.appendChild(mysteryIcon5);

// // 拡張時に表示されるコンテナ
// const expandedContainer = createElement('div', 'upsFvb', { jsname: "I2egDd", style: "display:none" });
// contentContainer.appendChild(expandedContainer);

// const expandedInnerContainer = createElement('div', 'xCAjrf oJeWuf');
// expandedContainer.appendChild(expandedInnerContainer);

// const expandedContentContainer = createElement('div', '');
// expandedContentContainer.id = "expandedContentContainer";
// expandedInnerContainer.appendChild(expandedContentContainer);

// const expandedSubContainer = createElement('div', '', { jsaction: "" });
// expandedContentContainer.appendChild(expandedSubContainer);

// const toggleContainer = createElement('div', 'oQr5db re5bTc', { jsname: "Igk6W", jscontroller: "w8B4Hd", jsaction: "JIbuQc:e4mHGd(VVjirf);" });
// expandedSubContainer.appendChild(toggleContainer);

// const toggleLabel = createElement('label', '', { for: "i1000" });
// toggleContainer.appendChild(toggleLabel);

// const toggleLabelText = createElement('div', 'NwkH8b', {}, '自動返信を有効にする');
// toggleLabel.appendChild(toggleLabelText);

// const toggleButtonContainer = createElement('div', 'Vz0N6b');
// toggleContainer.appendChild(toggleButtonContainer);

// const toggleButton = createElement('div', 'LsSwGf SWVgue Y4klN', {
//     id: "i1000",
//     jscontroller: "EcW08c",
//     jsaction: "keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;",
//     jsshadow: "",
//     jsname: "VVjirf",
//     'aria-label': "自動返信を有効にする",
//     tabindex: "0",
//     role: "checkbox",
//     'aria-checked': "false"
// });
// toggleButtonContainer.appendChild(toggleButton);

// const toggleButtonInner1 = createElement('div', 'hh4xKf MLPG7');
// toggleButton.appendChild(toggleButtonInner1);

// const toggleButtonInner2 = createElement('div', 'YGFwk MbhUzd');
// toggleButton.appendChild(toggleButtonInner2);

// const toggleButtonInner3 = createElement('div', 'rbsY8b');
// toggleButton.appendChild(toggleButtonInner3);

// const toggleButtonInner4 = createElement('div', 'E7QdY espmsb', { jsname: "IT5dJd" });
// toggleButtonInner3.appendChild(toggleButtonInner4);

// toggleButton.addEventListener('click', switchActiveStatus);

// // 自動返信専用フォームのコンテナ
// const replyFormContainer = createElement('div' , '' , {});

// // コンテナをオプションリストに追加
// expandedContentContainer.appendChild(replyFormContainer);

// // 差し込みコンテンツコンテナ
// const insertContentsContainer = createElement('div' , 'auto-reply container' , {
//     style : 'width:100%;'
// });
// replyFormContainer.appendChild(insertContentsContainer);

// // 差し込みコンテンツタイトルコンテナ
// const insertContentsTitleContainer = createElement('div' , '' , {
//     style: 'display:flex; justify-content:space-between;'
// })

// insertContentsContainer.appendChild(insertContentsTitleContainer);

// // 差し込みコンテンツタイトル
// const insertContentsTitle = createElement('p' , '' , {
//     style : 'margin-block-end:4px;'
// }, '差し込みコンテンツ');
// insertContentsTitleContainer.appendChild(insertContentsTitle);

// // 差し込みコンテンツ更新ボタンコンテナ
// const insertContentsRefreshButtonContainer = createElement('button' , 'auto-reply-form' , {
//     style : 'background:white; border:none;',
//     disabled : true
// });
// insertContentsTitleContainer.appendChild(insertContentsRefreshButtonContainer);

// // 更新ボタン
// const insertContentsRefreshSvgNS = "http://www.w3.org/2000/svg";
// const insertContentsRefreshButton = document.createElementNS(insertContentsRefreshSvgNS, "svg");
// insertContentsRefreshButton.setAttribute("xmlns", insertContentsRefreshSvgNS);
// insertContentsRefreshButton.setAttribute("width", "16");
// insertContentsRefreshButton.setAttribute("height", "16");
// insertContentsRefreshButton.setAttribute("fill", "currentColor");
// insertContentsRefreshButton.setAttribute("class", "bi bi-arrow-clockwise");
// insertContentsRefreshButton.setAttribute("viewBox", "0 0 16 16");
// insertContentsRefreshButton.setAttribute("style", "margin-top:12px;")

// // 最初のパス要素を作成
// const insertContentsRefreshPath1 = document.createElementNS(insertContentsRefreshSvgNS, "path");
// insertContentsRefreshPath1.setAttribute("fill-rule", "evenodd");
// insertContentsRefreshPath1.setAttribute("d", "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z");

// // 2番目のパス要素を作成
// const insertContentsRefreshPath2 = document.createElementNS(insertContentsRefreshSvgNS, "path");
// insertContentsRefreshPath2.setAttribute("d", "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z");

// // パス要素をSVGに追加
// insertContentsRefreshButton.appendChild(insertContentsRefreshPath1);
// insertContentsRefreshButton.appendChild(insertContentsRefreshPath2);

// insertContentsRefreshButton.addEventListener('click', getForm);

// insertContentsRefreshButtonContainer.appendChild(insertContentsRefreshButton);

// // 差し込みコンテンツフォーム
// const insertContentsForm = createElement('div' , '' , {
//     style : 'width:100%; height:84px; border:1px solid gainsboro; overflow:scroll; padding:0.5rem;',
//     id : 'insertContentsForm'
// });
// insertContentsContainer.appendChild(insertContentsForm);

// // 差し込みコンテンツ注釈
// const insertContentsAnotation = createElement('p' , '' , {
//     style : 'font-size:0.75em;'
// } , 
//     '※件名と本文に回答を差し込めます。<br>件名あるいは本文の挿入したい位置にカーソルを合わせてから、差し込みコンテンツをクリックしてください'
// );
// insertContentsContainer.appendChild(insertContentsAnotation);

// // 件名コンテナ
// const subjectContainer = createElement('div' , 'auto-reply container' , {
//     style : 'width:100%;'
// });

// // 件名コンテナをフォームコンテナに追加
// replyFormContainer.appendChild(subjectContainer);

// // 件名タイトル
// const subjectTitle = createElement('p' , '' , {
//     style : 'margin-block-end:4px;'
// },'件名（必須）');

// // 件名タイトルを件名コンテナに追加
// subjectContainer.appendChild(subjectTitle);

// // 件名フォーム
// const subjectForm = createElement('input' , 'auto-reply-form' ,{
//     type : 'text',
//     disabled : true,
//     style : 'width:100%; height:28px;',
//     id : 'auto-reply-subject-form'
// });

// // 件名フォームをコンテナに追加
// subjectContainer.appendChild(subjectForm);
// subjectForm.addEventListener('blur', recordInsertTarget);

// // 本文コンテナ
// const bodyContainer = createElement('div' , 'auto-reply container', {
//     style : 'width:100%;'
// });
// replyFormContainer.appendChild(bodyContainer);

// // 本文タイトル
// const bodyTitle = createElement('p' , '' , {
//     style : 'margin-block-end:4px;'
// }, '本文（必須）');
// bodyContainer.appendChild(bodyTitle);

// // 本文フォーム
// const bodyForm = createElement('textarea' , 'auto-reply-form' , {
//     disabled : true,
//     style : 'width:100%; height:128px; font-family: inherit;',
//     id : 'auto-reply-body-form'
// });
// bodyContainer.appendChild(bodyForm);
// bodyForm.addEventListener('blur', recordInsertTarget);

// // 送信元アドレスコンテナ
// const fromAddressContainer = createElement('div' , 'auto-reply container' , {
//     style : 'width:100%;'
// });
// replyFormContainer.appendChild(fromAddressContainer);

// // 送信元アドレスタイトルコンテナ
// const fromAddressTitleContainer = createElement('div' , '' , {
//     style: 'display:flex; justify-content:space-between;'
// });

// fromAddressContainer.appendChild(fromAddressTitleContainer);

// // 送信元アドレスタイトル
// const fromAddressTitle = createElement('p' , '' , {
//     style : 'margin-block-end:4px;'
// } ,  '送信元アドレス（必須）');
// fromAddressTitleContainer.appendChild(fromAddressTitle);

// // 更新ボタンコンテナ
// const fromAddressRefreshButtonContainer = createElement('button' , 'auto-reply-form' , {
//     style : 'background:white; border:none;',
//     disabled : true
// });
// fromAddressTitleContainer.appendChild(fromAddressRefreshButtonContainer);

// const fromAddressSvgNS = "http://www.w3.org/2000/svg";
// const fromAddressRefreshButton = document.createElementNS(fromAddressSvgNS, "svg");
// fromAddressRefreshButton.setAttribute("xmlns", fromAddressSvgNS);
// fromAddressRefreshButton.setAttribute("width", "16");
// fromAddressRefreshButton.setAttribute("height", "16");
// fromAddressRefreshButton.setAttribute("fill", "currentColor");
// fromAddressRefreshButton.setAttribute("class", "bi bi-arrow-clockwise");
// fromAddressRefreshButton.setAttribute("viewBox", "0 0 16 16");
// fromAddressRefreshButton.setAttribute("style", "margin-top:12px;")

// // 最初のパス要素を作成
// const fromAddressPath1 = document.createElementNS(fromAddressSvgNS, "path");
// fromAddressPath1.setAttribute("fill-rule", "evenodd");
// fromAddressPath1.setAttribute("d", "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z");

// // 2番目のパス要素を作成
// const fromAddressPath2 = document.createElementNS(fromAddressSvgNS, "path");
// fromAddressPath2.setAttribute("d", "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z");

// // パス要素をSVGに追加
// fromAddressRefreshButton.appendChild(fromAddressPath1);
// fromAddressRefreshButton.appendChild(fromAddressPath2);

// fromAddressRefreshButton.addEventListener('click', getAilias);

// fromAddressRefreshButtonContainer.appendChild(fromAddressRefreshButton);

// // 送信元アドレスフォーム
// const fromAddressForm = createElement('div' , '' , {
//     style : 'width:100%; height:84px; border:1px solid gainsboro; overflow:scroll; padding:0.5rem;',
// });
// fromAddressContainer.appendChild(fromAddressForm);

// // 送信元アドレス注釈
// const fromAddressAnotation = createElement('p' , '' , {
//     style : 'font-size:0.75em;'
// } , 
//     '※表示されるアドレスは現在ログイン中のGoogleアカウントGmailのエイリアスとして登録されているものに限ります。Gmailエイリアス登録は<a target="_brank" href="https://support.google.com/a/answer/33327?hl=ja">こちら<a>から'
// );
// fromAddressContainer.appendChild(fromAddressAnotation);

// // 送信元表示名コンテナ
// const fromNameContainer = createElement('div' , 'auto-reply container' , {
//     style : 'width:100%;'
// });
// replyFormContainer.appendChild(fromNameContainer);

// // 送信元表示名タイトル
// const fromNameTitle = createElement('p' , '' , {
//     style : 'margin-block-end:4px;'
// } , '送信元表示名（任意）');
// fromNameContainer.appendChild(fromNameTitle);

// // 送信元表示名フォーム
// const fromNameForm = createElement('input' , 'auto-reply-form' , {
//     type : 'text',
//     disabled : true,
//     style : 'width:100%; height:28px;',
//     id : 'auto-reply-fromName-form'
// });
// fromNameContainer.appendChild(fromNameForm);

// // CCコンテナ
// const ccContaiter = createElement('div' , 'auto-reply container' , {
//     style : 'width:100%;'
// });
// replyFormContainer.appendChild(ccContaiter);

// // CCタイトル
// const ccTitle = createElement('p' , '' , {
//     style : 'margin-block-end:4px;'
// } , 'CC（任意）');
// ccContaiter.appendChild(ccTitle);

// // CCフォーム
// const ccForm = createElement('input' , 'auto-reply-form' , {
//     placeholder : '複数ある場合はカンマ区切りで入力してください',
//     name : 'cc',
//     disabled : true,
//     style : 'width:100%; height:28px;',
//     id : 'auto-reply-cc-form'
// });
// ccContaiter.appendChild(ccForm);

// // BCCコンテナ
// const bccContainer = createElement('div' , 'auto-reply container' , {
//     style : 'width:100%;'
// });
// replyFormContainer.appendChild(bccContainer);

// // BCCタイトル
// const bccTitle = createElement('p' , '' , {
//     style : 'margin-block-end:4px;'
// } , 'BCC（任意）');
// bccContainer.appendChild(bccTitle);

// // BCCフォーム
// const bccForm = createElement('input' , 'auto-reply-form' , {
//     placeholder : '複数ある場合はカンマ区切りで入力してください',
//     name : 'bcc',
//     disabled : true,
//     style : 'width:100%; height:28px;',
//     id : 'auto-reply-bcc-form'
// });
// bccContainer.appendChild(bccForm);

// // 添付ファイルコンテナ
// const attachmentFilesContainer = createElement('div' , 'auto-reply container' , {
//     style : 'width:100%;'
// });
// replyFormContainer.appendChild(attachmentFilesContainer);

// // 添付ファイルタイトル
// const attachmentFilesTitle = createElement('p' , '' , {
//     style : 'margin-block-end:4px;'
// } , '添付ファイル（任意）');
// attachmentFilesContainer.appendChild(attachmentFilesTitle);

// // 添付ファイルフォーム
// const attachmentFilesForm = createElement('input' , 'auto-reply-form' , {
//     type : 'file',
//     disabled : true,
//     id :'auto-reply-attachment-form'
// });
// attachmentFilesContainer.appendChild(attachmentFilesForm);

// // 完了ボタンコンテナ
// const doneButtonContainer = createElement('div', '', {
//     style: 'display:flex; width:100%; justify-content:center; margin-top:1rem'
// })
// replyFormContainer.appendChild(doneButtonContainer);

// // 完了ボタン
// const doneButton = createElement('button' , 'auto-reply-form' , {
//     disabled : true,
//     style: 'border:none; background:darkviolet; color:white; border-radius:4px; padding-top:0.5rem; padding-bottom:0.5rem; padding-left:1rem; padding-right:1rem; cursor:pointer'
// } , '完了');
// doneButtonContainer.appendChild(doneButton);
// doneButton.addEventListener('click', done);

// // GoogleフォームのIDを取得
// const path = location.pathname;
// const formId = extractFormId(path);

// let autoReplySettingDatas;
// chrome.storage.local.get(["auto-reply-google-form-for-japanese"])
// .then(result => {
//     autoReplySettingDatas = result
//     const thisFormData = autoReplySettingDatas["auto-reply-google-form-for-japanese"][formId];
//     if('subject' in thisFormData) subjectForm.value = thisFormData.subject;
//     if('body' in thisFormData) bodyForm.value = thisFormData.body;
//     if('fromName' in thisFormData) fromNameForm.value = thisFormData.fromName;
//     if('cc' in thisFormData) ccForm.value = thisFormData.cc;
//     if('bcc' in thisFormData) bccForm.value = thisFormData.bcc;
// })
// .catch(error => console.log(error));

// // もしローカルストレージにフォームIDがなければ格納する
// if(autoReplySettingDatas !== undefined && formId in autoReplySettingDatas['auto-reply-google-form-for-japanese']){
//     autoReplySettingDatas['auto-reply-google-form-for-japanese'][formId] = {};
//     chrome.storage.local.set(autoReplySettingDatas)
//     .then(() => console.log('ローカルストレージにこのフォームを保存しました'))
//     .catch(() => console.log('ローカルストレージにこのフォームを保存できませんでした'));
// }

// // 有効化状態を切り替える関数
// async function switchActiveStatus(e){
//     // 有効化状態を取得
//     const active = this.getAttribute('aria-checked');

//     // すべてのフォームを取得
//     const forms = document.getElementsByClassName('auto-reply-form');

//     // 無効状態だった場合
//     if(active === 'false'){
    
        
//         // ストレージにフォームIDがある場合
//         if(formId in autoReplySettingDatas){
//             const currentForm = autoReplySettingDatas['auto-reply-google-form-for-japanese'][formId];

//             // ストレージから件名と本文を復元
//             if('subject' in currentForm) subjectForm.value = currentForm['subject'];
//             if('body' in currentForm) bodyForm.value = currentForm['body'];
//             if('fromName' in currentForm) fromNameForm.value = currentForm['fromName'];
//             if('cc' in currentForm) ccForm.value = currentForm['cc'];
//             if('bcc' in currentForm) bccForm.value = currentForm['bcc'];
//         }

//         // 差し込みフォームと送信元アドレスフォームが両方空の場合
//         if(!insertContentsForm.hasChildNodes() && !fromAddressForm.hasChildNodes()){
//             await getForm();
//             await getAilias();
//         }

//         // フォームを有効にする
//         for(let form of forms){
//             form.disabled = false;
//         }

//         // 差し込みコンテンツと送信元アドレスのフォームを有効にする
//         insertContentsForm.style.border = '1px solid black';
//         fromAddressForm.style.border = '1px solid black';

//         const insertContents = document.getElementsByClassName('insert-content');
//         for(let insertContent of insertContents){
//             insertContent.style.color = 'black';
//         }

//         const ailiases = document.getElementsByClassName('ailias');
//         for(let ailias of ailiases){
//             const radio = ailias.children[0];
//             radio.disabled = false;
//             const label = ailias.children[1];
//             label.style.color = 'black';
//         }

//         // 有効状態だった場合
//     }else if(active === 'true'){

//         // フォームを無効にする
//         for(let form of forms){
//             form.disabled = true;
//         }

//         // 差し込みコンテンツと送信元アドレスのフォームを無効にする
//         insertContentsForm.style.border = '1px solid gainsboro';
//         fromAddressForm.style.border = '1px solid gainsboro';

//         const insertContents = document.getElementsByClassName('insert-content');
//         for(let insertContent of insertContents){
//             insertContent.style.color = 'darkgray';
//         }

//         const ailiases = document.getElementsByClassName('ailias');
//         for(let ailias of ailiases){
//             const radio = ailias.children[0];
//             radio.disabled = true;
//             const label = ailias.children[1];
//             label.style.color = 'darkgray';
//         }

//     }

// }

// // urlからフォームのIDを取得する関数
// function extractFormId(url) {
//     // 正規表現を使ってURLからフォームIDを抽出
//     const regex = /\/forms\/d\/([a-zA-Z0-9_-]+)/;
//     const match = url.match(regex);
    
//     // マッチが見つかった場合はフォームIDを返す
//     if (match && match[1]) {
//       return match[1];
//     } else {
//       throw new Error("Form ID not found in the URL");
//     }
// }
// let linkedSheetId;
// // フォームを取得する関数
// async function getForm(){

//     const response = await chrome.runtime.sendMessage({
//         eventName: 'getForm',
//         formId: formId
//     });

//     console.log(response);
//     if(response.linkedSheetId){
//         linkedSheetId = response.linkedSheetId;
//     }

//     while(insertContentsForm.hasChildNodes()){
//         insertContentsForm.removeChild(insertContentsForm.firstChild);
//     }

//     // フォームの質問をループ
//     for(let question of response.form.items){

//         // 質問タイトルをpタグで入れる
//         const title = question.title;
//         const insertContent = createElement('p' , 'insert-content' , {
//             style: 'font-size:0.75rem; margin-block-start:0; margin-block-end:0; cursor:pointer; border-bottom:0.5px solid gainsboro'
//         } , `{{${title}}}`);
//         insertContentsForm.appendChild(insertContent);
//         insertContent.addEventListener('click', insert);
//     }

//     // PUTfilesを調べるためのサンプルコンテンツの取得
//     // const sampleRes = await chrome.runtime.sendMessage({
//     //     eventName: 'getSampleContent'
//     // });

//     // console.log(sampleRes);

// }


// // エイリアスを取得する関数
// async function getAilias(){

//     const response = await chrome.runtime.sendMessage({
//         eventName: 'getAilias'
//     });

//     console.log(response);

//     // メールアドレスをループ
//     for(let ailias of response.ailias.sendAs){

//         // ラジオボタンを追加
//         const ailiasContainer = createElement('div' , 'ailias' , {
//             style:'display:flex; align-items:center;'
//         });

//         fromAddressForm.appendChild(ailiasContainer);            

//         const radioButton = createElement('input' , '' , {
//             type:'radio',
//             name:'auto-reply-select-fromAddress',
//             id:`ailias-address-${ailias.sendAsEmail}`,
//             value: ailias.sendAsEmail
//         });

//         ailiasContainer.appendChild(radioButton);

//         const label = createElement('label' , '' , {
//             for:`ailias-address-${ailias.sendAsEmail}`,
//             style: 'font-size:0.75rem;'
//         },ailias.sendAsEmail);

//         ailiasContainer.appendChild(label);
//     }
// }

// let insertTarget;

// // 件名と本文をクリックしたときの関数
// function recordInsertTarget(){
//     insertTarget = this;
// }

// // 差し込みコンテンツをクリックしたときの関数
// function insert(){
//     const active = toggleButton.getAttribute('aria-checked');
//     if(active === "false" || insertTarget === undefined) return;
//     const insertText = this.innerText;
//     insertTarget.focus();
//     insertTarget.setRangeText(insertText, insertTarget.selectionStart, insertTarget.value.length, 'end');
//     insertTarget.selectionStart += insertText.length;
// }

// // 完了ボタンを押したときの関数
// async function done(){
//     const collectMailAddressConfigContainer = document.getElementsByClassName('uZH9Ac')[0];
//     console.log(collectMailAddressConfigContainer);
//     const collectMailAddressConfigListBox = collectMailAddressConfigContainer.children[1];
//     console.log(collectMailAddressConfigListBox);
//     const getMailConfig = collectMailAddressConfigListBox.getElementsByClassName('MocG8c HZ3kWc  LMgvRb KKjvXb')[0];
//     console.log(getMailConfig);
//     console.log(getMailConfig.innerText);
//     if(getMailConfig.innerText === '収集しない' || getMailConfig.innerText === undefined){
//         window.alert('メールアドレスの収集設定が「収集しない」の場合は自動返信設定ができません\n\n設定 > 回答 > メールアドレスを収集するから「確認済み」もしくは「回答者からの入力」を選択してください');
//         return;
//     }

//     // if(linkedSheetId === undefined){
//     //     await getForm();
//     //     if(linkedSheetId === undefined){
//     //         window.alert('回答を収集するスプレッドシートが設定されていないため実行できません');
//     //         return;
//     //     }
//     // }
//     const subject = document.getElementById('auto-reply-subject-form');
//     const body = document.getElementById('auto-reply-body-form');
//     const fromAddress = document.getElementsByName('auto-reply-select-fromAddress');
//     const fromName = document.getElementById('auto-reply-fromName-form');
//     const cc = document.getElementById('auto-reply-cc-form');
//     const bcc = document.getElementById('auto-reply-bcc-form');
//     const attachment = document.getElementById('auto-reply-attachment-form');

//     let selectedFromAddress;
//     for(const address of fromAddress){
//         console.log(address.checked);
//         if(address.checked) {
//             selectedFromAddress = address.value;
//             break;
//         }
//     }

//     if(subject.value === "" || body.value === "" || selectedFromAddress === undefined){
//         window.alert('必須項目が入力されていないため、登録に失敗しました');
//         return;
//     }

//     // ローカルストレージに保存
//     console.log(subject);
//     const saveData = autoReplySettingDatas['auto-reply-google-form-for-japanese'][formId];
//     saveData.subject = subject.value;
//     saveData.body = body.value;
//     saveData.fromAddress = selectedFromAddress;
//     saveData.fromName = fromName.value;
//     saveData.cc = cc.value;
//     saveData.bcc = bcc.value;

//     chrome.storage.local.set(saveData)
//     .then(() => {
//         chrome.storage.local.get(['auto-reply-google-form-for-japanese'])
//         .then((value) => console.log('保存後のストレージ', value))
//         .catch((error) => console.log(error));
//     })
//     .catch((error) => console.log(error));

//     // スクリプトIDを復元
//     let scriptId;

//     // ローカルストレージにあればそれを復元
//     if('scriptId' in autoReplySettingDatas['auto-reply-google-form-for-japanese'][formId]){
//         scriptId = autoReplySettingDatas['auto-reply-google-form-for-japanese'][formId]['scriptId'];

//         // 無ければつくる
//     }else{
//         console.log('スクリプトを作ります')
//         const message = {
//             eventName: 'createScript',
//             linkedSheetId: linkedSheetId
//         }

//         const response = await chrome.runtime.sendMessage(message);
//         console.log(response);
//         if(response.hasOwnProperty('error')){
            
//             if(response.error.code === 403){
//                 const confirm = window.confirm('Apps Script APIが無効になっているため登録に失敗しました\nApps Script APIを有効にする設定ページに移動しますか？\n有効に設定したら再度完了ボタンを押してください');
//                 if(confirm) window.open('https://script.google.com/home/usersettings','_blank');
//             }

//             return;
//         }

//         if('scriptId' in response){ 
//             saveData['scriptId'] = response.scriptId;
//             chrome.storage.local.set(saveData)
//             .then(() => {
//                 chrome.storage.local.get(['auto-reply-google-form-for-japanese'])
//                 .then((value) => console.log('保存後のストレージ', value))
//                 .catch((error) => console.log(error));
//             })
//             .catch((error) => console.log(error));
//             scriptId = response.scriptId;
//         }
//     }

//     // スクリプトをセットする
//     const message = {
//         eventName: 'setScript',
//         scriptId: scriptId,
//         subject: subject.value,
//         body: body.value,
//         option:{
//             fromAddress: selectedFromAddress
//         }
//     }

//     if(fromName.value !== ""){
//         message.option.fromName = fromName.value;
//     }

//     if(cc.value !== ""){
//         message.option.cc = cc.value;
//     }

//     if(bcc.value !== ""){
//         message.option.bcc = bcc.value;
//     }

//     const files = attachment.files;

//     if(!files){
//         message.option.attachments = files;
//     }

//     // const loadedFiles = [];

//     // const fileReader = new FileReader();
//     // fileReader.addEventListener('load', () => loadedFiles.push(fileReader.result));

//     // for(const file of files){
//     //     fileReader.readAsArrayBuffer(file);
//     // }

//     const response = await chrome.runtime.sendMessage(message);
//     console.log(response)
// }