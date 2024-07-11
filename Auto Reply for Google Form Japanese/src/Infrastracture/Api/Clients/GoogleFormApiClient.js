class GoogleFormApiClient extends GoogleApiClient{
    #baseUrl;
    #apiKey;
    constructor(){
        super();
        this.#baseUrl = `https://forms.googleapis.com/`;
        this.#apiKey = 'AIzaSyC3bcvnfuWfXFr0xyJG-UHLsvar6dnhT1A';
    }

    getForm(formId){
        const parameters = this.createParams('GET');
        fetch(`${this.#baseUrl}/v1/forms/${formId}?key=${this.#apiKey}`,parameters)
        .then(form => {return form})
        .catch(error => {throw error});
    }
}