// 要素を作成するヘルパー関数
function createElement(tag, className, attributes, innerHTML) {
    const element = document.createElement(tag);
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

// 挿入する一つ上の項目のスタイルを変更する
const displayConfig = document.getElementsByClassName("Vy2jue")[0];
displayConfig.style.padding = "20px 15px 30px 0";
displayConfig.style.borderBottom = "1px solid rgb(218, 220, 224)";

// 挿入元の親となるDOMを取得
const parent = document.getElementsByClassName('aDRHlc')[0];

// メインコンテナ
const mainContainer = createElement('div', '', {
    style: "padding: 30px 15px 6px 0;"
});

// 作成した要素をbodyに追加
parent.appendChild(mainContainer);

// 全コンテンツコンテナ
const contentContainer = createElement('div', '', {
    jsaction: "JIbuQc:Dl4LN(ix0Hvc),QqKrT(QCXj2);YvW3de:Dl4LN;",
    jscontroller: "vB0Vle",
    jsname: "oAAw5d"
});
mainContainer.appendChild(contentContainer);

// ヘッダーコンテナ
const headerContainer = createElement('div', 'ilZlpb');
contentContainer.appendChild(headerContainer);

// タイトルコンテナ
const titleContainer = createElement('div', 'qjigG');
headerContainer.appendChild(titleContainer);

// タイトル
const title = createElement('div', '', {}, '自動返信設定');
titleContainer.appendChild(title);

// サブタイトル
const subtitle = createElement('div', 'ApY6ue', {}, '自動返信の設定を管理できます');
titleContainer.appendChild(subtitle);

// エクスパンドアローコンテナ
const expandArrowContainer = createElement('div', 'SK5oQb', { jsname: "AvkpRc" });
headerContainer.appendChild(expandArrowContainer);

const expandArrowButton = createElement('div', 'uArJ5e Y5FYJe cjq2Db', {
    role: "button",
    jscontroller: "VXdfxd",
    jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;",
    jsshadow: "",
    jsname: "ix0Hvc",
    'aria-label': "プレゼンテーション設定を表示",
    tabindex: "0",
    'aria-expanded': "false"
});
expandArrowContainer.appendChild(expandArrowButton);

const expandArrowIcon1 = createElement('div', 'PDXc1b MbhUzd', { jsname: "ksKsZd", style: "top: 12px; left: 12px; width: 0px; height: 0px;" });
expandArrowButton.appendChild(expandArrowIcon1);

const expandArrowSlot = createElement('span', 'XuQwKc', { jsslot: "" });
expandArrowButton.appendChild(expandArrowSlot);

const expandArrowIcon2 = createElement('span', 'GmuOkf');
expandArrowSlot.appendChild(expandArrowIcon2);

const expandArrowIcon3 = createElement('div', 'foqfDc');
expandArrowIcon2.appendChild(expandArrowIcon3);

const expandArrowIcon4 = createElement('div', 'Y0xAIe BNL9Bd NpcyEe-n5T17d-Bz112c-KoToPc-z5C9Gb-BvMwwf', { 'aria-hidden': "true" }, '&nbsp;');
expandArrowIcon3.appendChild(expandArrowIcon4);

const expandArrowIcon5 = createElement('div', 'Y0xAIe ivmiLb NpcyEe-n5T17d-Bz112c-KoToPc-z5C9Gb-AhqUyc', { 'aria-hidden': "true" }, '&nbsp;');
expandArrowIcon3.appendChild(expandArrowIcon5);

// 謎のコンテナ
const mysteryContainer = createElement('div', 'SK5oQb', { jsname: "fW2qAb", style: "display:none" });
headerContainer.appendChild(mysteryContainer);

const mysteryButton = createElement('div', 'uArJ5e Y5FYJe cjq2Db', {
    role: "button",
    jscontroller: "VXdfxd",
    jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;",
    jsshadow: "",
    jsname: "QCXj2",
    'aria-label': "プレゼンテーション設定を非表示",
    tabindex: "0",
    'aria-expanded': "false"
});
mysteryContainer.appendChild(mysteryButton);

const mysteryIcon1 = createElement('div', 'PDXc1b MbhUzd', { jsname: "ksKsZd", style: "top: 12px; left: 12px; width: 0px; height: 0px;" });
mysteryButton.appendChild(mysteryIcon1);

const mysterySlot = createElement('span', 'XuQwKc', { jsslot: "" });
mysteryButton.appendChild(mysterySlot);

const mysteryIcon2 = createElement('span', 'GmuOkf');
mysterySlot.appendChild(mysteryIcon2);

const mysteryIcon3 = createElement('div', 'foqfDc');
mysteryIcon2.appendChild(mysteryIcon3);

const mysteryIcon4 = createElement('div', 'Y0xAIe BNL9Bd NpcyEe-n5T17d-Bz112c-KoToPc-OCFbXc-BvMwwf', { 'aria-hidden': "true" }, '&nbsp;');
mysteryIcon3.appendChild(mysteryIcon4);

const mysteryIcon5 = createElement('div', 'Y0xAIe ivmiLb NpcyEe-n5T17d-Bz112c-KoToPc-OCFbXc-AhqUyc', { 'aria-hidden': "true" }, '&nbsp;');
mysteryIcon3.appendChild(mysteryIcon5);

// 拡張時に表示されるコンテナ
const expandedContainer = createElement('div', 'upsFvb', { jsname: "I2egDd", style: "display:none" });
contentContainer.appendChild(expandedContainer);

const expandedInnerContainer = createElement('div', 'xCAjrf oJeWuf');
expandedContainer.appendChild(expandedInnerContainer);

const expandedContentContainer = createElement('div', '');
expandedContentContainer.id = "expandedContentContainer";
expandedInnerContainer.appendChild(expandedContentContainer);

const expandedSubContainer = createElement('div', '', { jsaction: "" });
expandedContentContainer.appendChild(expandedSubContainer);

const toggleContainer = createElement('div', 'oQr5db re5bTc', { jsname: "Igk6W", jscontroller: "w8B4Hd", jsaction: "JIbuQc:e4mHGd(VVjirf);" });
expandedSubContainer.appendChild(toggleContainer);

const toggleLabel = createElement('label', '', { for: "i1000" });
toggleContainer.appendChild(toggleLabel);

const toggleLabelText = createElement('div', 'NwkH8b', {}, '自動返信を有効にする');
toggleLabel.appendChild(toggleLabelText);

const toggleButtonContainer = createElement('div', 'Vz0N6b');
toggleContainer.appendChild(toggleButtonContainer);

const toggleButton = createElement('div', 'LsSwGf SWVgue Y4klN', {
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

toggleButton.addEventListener('click', async function() {
    const checked = this.getAttribute('aria-checked');
    if (checked === 'true') return false;
    const user = await chrome.runtime.sendMessage({ eventName: 'pushedActiveAutoReply' });
    console.log(user);
    const paid = await user.paid;
    if (paid) {
        const emailsAndQuestions = await chrome.runtime.sendMessage({ eventName: 'paidUser' });
        console.log(emailsAndQuestions);
    }
});

const toggleButtonInner1 = createElement('div', 'hh4xKf MLPG7');
toggleButton.appendChild(toggleButtonInner1);

const toggleButtonInner2 = createElement('div', 'YGFwk MbhUzd');
toggleButton.appendChild(toggleButtonInner2);

const toggleButtonInner3 = createElement('div', 'rbsY8b');
toggleButton.appendChild(toggleButtonInner3);

const toggleButtonInner4 = createElement('div', 'E7QdY espmsb', { jsname: "IT5dJd" });
toggleButtonInner3.appendChild(toggleButtonInner4);