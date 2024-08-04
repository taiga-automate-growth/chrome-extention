export class BrowserLocalStorage{
    /**
     * 
     * @param {string} key ローカルストレージに保存されるキー
     * @return {Promise} 
     */
    get(key){
        console.log('ブラウザローカルストレージから値を取り出します');
        return new Promise((resolve,reject)=>{
            chrome.storage.local.get(key)
            .then(data => {
                if(Object.keys(data).length === 0) {
                    reject(NotFoundDataException(`ローカルストレージに${key}というデータは存在しませんでした`));
                    return;
                }
                console.log('ブラウザローカルストレージから取り出したデータです');
                console.log(data);
                resolve(data)})
            .catch(e => {reject(e)});
        });
    }

    save(data){
        return new Promise((resolve,reject) => {
            chrome.storage.local.set(data)
            .then(() => {resolve('データ保存成功')})
            .catch(() => {reject(new Error('データの保存に失敗しました'));});
        })
    }
}