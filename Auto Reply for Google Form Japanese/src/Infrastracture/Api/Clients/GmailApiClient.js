class GmailApiClient extends GoogleApiClient{
    #baseUrl;
    #apiKey;
    constructor(){
        super();
        this.#baseUrl = `https://gmail.googleapis.com/gmail`;
        this.#apiKey = 'AIzaSyAsZolQRakQXuQOj_Ne7NlXOsrmapJYFWs';
    }

    getAiliases(){
        const parameters = this.createParams('GET');
        fetch(`${this.#baseUrl}/v1/users/me/settings/sendAs?key=${this.#apiKey}`,parameters)
        .then(ailiases => {return ailiases})
        .catch(error => {throw error});
    }
}