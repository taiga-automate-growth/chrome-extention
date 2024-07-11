class ApiRequestSender{
    /**
     * 
     * @param {object} message  
     */
    sendMessage(message){
        chrome.runtime.sendMessage(message)
        .then(response => {return response;})
        .catch(error => {return error;})
    }
}