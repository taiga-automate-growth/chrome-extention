(() => {
    const src = chrome.runtime.getURL('src/App.js');
    console.log(src);
    const script = document.createElement('script');
    script.setAttribute('src', src);
    script.setAttribute('type', 'module');
    document.body.appendChild(script);
})();