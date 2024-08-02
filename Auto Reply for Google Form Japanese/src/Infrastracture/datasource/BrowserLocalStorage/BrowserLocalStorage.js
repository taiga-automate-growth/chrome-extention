export class BrowserLocalStorage{
    get(key){
        chrome.storage.local.get(key)
        .then(data => {return data})
        .catch(e => {throw e});
    }

    save(data){
        chrome.storage.local.set(data)
        .then(() => {})
        .catch(() => {
            throw new Error('データの保存に失敗しました');
        });
    }
}