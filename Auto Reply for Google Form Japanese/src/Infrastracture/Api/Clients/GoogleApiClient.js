class GoogleApiClient{
    token;

    constructor(){
        chrome.identity.getAuthToken({interactive:true})
        .then(authTokenResult => {
            this.token = authTokenResult.token;
        })
        .catch(error => {throw error;});
    }

    createParams(method, body = {}){
        const parameters = {
            method: method,
            async: true,
            headers: {
                Authorization:'Bearer ' + this.token,
                'Content-Type':'application/json'
            },
            'contentType': 'json'
        }

        if(body !== undefined || Object.keys(body).length > 0){
            parameters.body = JSON.stringify(body);
        }

        return body;
    }
}