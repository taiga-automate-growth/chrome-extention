export class DIContainer{
    /** @type {Map} */
    #registry;

    constructor(){
        this.#registry = new Map();
    }

    register(key, Constructor, ...args){
        const instance = new Constructor(...args);
        this.#registry.set(key, instance);
    }

    get(key){
        const instance = this.#registry.get(key);
        if(!instance){
            throw new Error('インスタンスが見つかりませんでした');
        }
        return instance;
    }
}