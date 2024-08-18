import { BackgroundMessagePort } from "./BackgroundMessagePort.js";

// インストールしたとき（バージョンアップも含む）
chrome.runtime.onInstalled.addListener(() => {
    // ローカルストレージを取得
    chrome.storage.local.get(['auto-reply-google-form-for-japanese'])
    .then(autoReplyLocalData => {
        
        // ローカルにストレージがなければ{}が返却される為それを判定
        if(Object.keys(autoReplyLocalData).length === 0){
            // 格納領域を作る
            chrome.storage.local.set({'auto-reply-google-form-for-japanese':{}})
            .then(() => console.log('ローカルストレージにデータ保存領域を設定しました'))
            .catch(() => console.log('ローカルストレージの保存領域設定に失敗しました'));
        }

        // 更新日を上書き
        autoReplyLocalData['auto-reply-google-form-for-japanese']['updateAt'] = new Date().toUTCString();
        chrome.storage.local.set(autoReplyLocalData)
        .then(() => {
            chrome.storage.local.get(['auto-reply-google-form-for-japanese'])
            .then(insertResult => console.log(insertResult))
            .catch(error => console.log(error.toString()));
        })
        .catch(() => console.log('更新日の上書きに失敗しました'));
    })
    .catch((error) =>{
        console.log(error.toString());
    });
});

// // 外部スクリプトからメッセージを受信したとき
chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
    console.log('バックグラウンドにメッセージが届いています');
    new BackgroundMessagePort(message, sender, sendResponse)
    .handle();
});