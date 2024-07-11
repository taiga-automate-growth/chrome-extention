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

// 外部スクリプトからメッセージを受信したとき
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    
    chrome.identity.getAuthToken({interactive:true},
    token => {
        const option = {
            method: 'GET',
            async: true,
            headers: {
                Authorization:'Bearer ' + token,
                'Content-Type':'application/json'
            },
            'contentType': 'json'
        }
        const response = {};

        if(message.eventName === 'getForm'){
            
            const formId = message.formId;
            const formsApiKey = 'AIzaSyC3bcvnfuWfXFr0xyJG-UHLsvar6dnhT1A';
            // フォームオブジェクトを取得する
            fetch(`https://forms.googleapis.com/v1/forms/${formId}?key=${formsApiKey}`,
                option
            )
            .then(response => response.json())
            .then(form => {
                response.form = form;
                sendResponse(response);
            })
            .catch(error => {
                console.error(`フォームデータの取得に失敗しました:` , error)
                sendResponse({error:error.toString()});
            });

        }else if(message.eventName === 'getAilias'){
            // Gmailエイリアスを取得する
            const gmailApiKey = "AIzaSyAsZolQRakQXuQOj_Ne7NlXOsrmapJYFWs";
            fetch(`https://gmail.googleapis.com/gmail/v1/users/me/settings/sendAs?key=${gmailApiKey}`,option)
            .then(response => response.json())
            .then(ailias => {
                response.ailias = ailias;
                sendResponse(response);
            })
            .catch(error => {
                console.error(`エイリアスの取得に失敗しました:` , error)
                sendResponse({error:error.toString()});
            })

            .catch(error => {
                console.error(`ログインメールアドレスの取得に失敗しました:` , error)
                sendResponse({error:error.toString()});
            })
        }else if(message.eventName === 'createScript'){
            // GASプロジェクトを立ち上げる
            const linkedSheetId = message.linkedSheetId;
            const appScriptApiKey = 'AIzaSyANMKrOrF6hDYmQywMfYKcL9YU15Sx0WL8';

            option.method = 'POST';
            option.body = JSON.stringify({
                title:'自動返信設定',
                parentId:linkedSheetId
            });
            console.log(option);
            fetch(`https://script.googleapis.com/v1/projects?key=${appScriptApiKey}`, option)
            .then(response => response.json())
            .then(project => sendResponse(project))
            .catch(error => {
                console.error(`スクリプトの立ち上げに失敗しました:` , error)
                sendResponse({error:error.toString()});
            });

        }else if(message.eventName === 'setScript'){
            const scriptId = message.scriptId;
            const appScriptApiKey = 'AIzaSyANMKrOrF6hDYmQywMfYKcL9YU15Sx0WL8';
            
            // manifest.json
            const manifest = {
                name: 'appsscript',
                type: 'JSON',
                source:JSON.stringify({
                    "timeZone": "Asia/Tokyo",
                    "dependencies": {},
                    "exceptionLogging": "STACKDRIVER",
                    "runtimeVersion": "V8",
                    "oauthScopes":[
                        "https://mail.google.com/",
                        "https://www.googleapis.com/auth/script.scriptapp",
                        "https://www.googleapis.com/auth/forms"
                    ]
                })
            };

            // フォーム送信時に実行される関数
            const onFormSubmitScript = {
                name: 'main',
                type: 'SERVER_JS',
                source:
                `function onFormSubmit(e) {
                    // 回答オブジェクトを質問ごとに配列で取得
                    const responses = e.response.getItemResponses();
                    let subject = '${message.subject}'
                    let body = '${message.body.replace(/\n/g, '\\n')}'
                    // 回答オブジェクトを一つずつループ
                    for (const response of responses){
                        // 回答内容を取得
                        const answer = response.getResponse();

                        // 質問文を取得
                        const question = '{{' + response.getItem().getTitle() + '}}';

                        body = body.split(question).join(answer);
                        subject = subject.split(question).join(answer);
                        
                    }
                    // すべての回答を取得

                    const recipient = e.response.getRespondentEmail();

                    // オプション
                    // const option = '${message.option}'

                    GmailApp.sendEmail(recipient, subject, body);
                    // メールの送信を実行する
                }`,
                functionSet: {
                    values: [
                    {
                        name: 'onFormSubmit',
                        parameters: ['e']
                    }
                ]}
            };

            // トリガーを設定する関数
            // const setTriggerScript = {
            //     name: 'trigger',
            //     type: 'SERVER_JS',
            //     source: 
            //     `function setTrigger() {
            //         const triggers = ScriptApp.getProjectTriggers();
            //         triggers.forEach(trigger => ScriptApp.deleteTrigger(trigger));
            //         ScriptApp.newTrigger('onFormSubmit')
            //         .forForm(FormApp.getActiveForm())
            //         .onFormSubmit()
            //         .create();
            //     }`,
            //     functionSet: {
            //         values: [
            //         {
            //             name: 'setTrigger'
            //         }
            //     ]}
            // };

            option.method = 'PUT';
            option.body = JSON.stringify({
                files:[manifest, onFormSubmitScript]
            });

            // スクリプトを更新する
            fetch(`https://script.googleapis.com/v1/projects/${scriptId}/content?key=${appScriptApiKey}`, option)
            .then(response => response.json())
            .then((res) => {
                console.log('スクリプトの更新に成功しました', res);

                // バージョンを作る
                // option.method = 'POST';
                // option.body = JSON.stringify({
                //     versionNumber: 1,
                //     description: 'フォームに回答があった場合に自動で返信する',
                //     createTime: new Date().toISOString()
                // });
                // fetch(`https://script.googleapis.com/v1/projects/${scriptId}/versions?key=${appScriptApiKey}`, option)
                // .then(response => response.json())
                // .then(version => {
                //     console.log('バージョンの作成に成功しました', version);
                    
                //     // プロジェクトをデプロイする
                //     option.method = 'POST';
                //     option.body = JSON.stringify({
                //         versionNumber: 1,
                //         manifestFileName: 'appsscript',
                //         description: ''
                //     });

                //     fetch(`https://script.googleapis.com/v1/projects/${scriptId}/deployments?key=${appScriptApiKey}`, option)
                //     .then(response => response.json())
                //     .then(deployment => {
                //         console.log('デプロイに成功しました', deployment);

                //         // トリガー設定関数を実行する
                //         const deploymentId = deployment.deploymentId;
                //         option.method = 'POST';
                //         option.body = JSON.stringify({
                //             "function": "setTrigger",
                //             "parameters": [],
                //             "devMode": true
                //         });

                //         fetch(`https://script.googleapis.com/v1/scripts/${scriptId}:run?key=${appScriptApiKey}`, option)
                //         .then(response => response.json())
                //         .then(runResult => {
                //             console.log('トリガーの設定に成功しました', runResult)
                //             sendResponse(runResult)
                //         })
                //         .catch(error => {
                //             console.error(`トリガーの設定に失敗しました:` , error)
                //             sendResponse({error:error.toString()});
                //         })
                //     })
                //     .catch(error => {
                //         console.log('デプロイに失敗しました', error.toString());
                //         sendResponse(error);
                //     })
                // })
                // .catch(error => {
                //     console.log('バージョンの作成に失敗しました', error.toString());
                //     sendResponse(error);
                // });
                sendResponse(res);
            })
            .catch(error => {
                console.error(`スクリプトの更新に失敗しました:` , error)
                sendResponse({error:error.toString()});
            })
        }else if(message.eventName === 'getSampleContent'){
            // console.log('サンプルコンテンツを取得します');
            fetch('https://script.googleapis.com/v1/projects/1kpvbomA16GARrpA7GHbbIZ--tA-rOV9YppXpMuDYUZDcaR2GFDIibTVF/content',{
                method: 'GET',
                async: true,
                headers: {
                    Authorization:'Bearer ' + token,
                    'Content-Type':'application/json'
                },
                'contentType': 'json'
            })
            .then(response => response.json())
            .then(content => sendResponse(content))
            .catch(error => sendResponse(error.toString()));
        }
    });
    return true;
});