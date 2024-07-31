(() => {
    const src = chrome.runtime.getURL('src/contents-script.js');
    console.log(src);
    const script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute('type', 'module');
    document.body.appendChild(script);
})();