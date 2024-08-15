export class DIContainer{
    /** @type {Map} */
    #registry;

    constructor(){
        this.#registry = new Map();
    }

    register(key, Constructor, ...args){
        const instance = new Constructor(...args);
        console.log(instance);
        this.#registry.set(key, instance);
    }

    get(key){
        const instance = this.#registry.get(key);
        console.log(instance);
        if(!instance){
            throw new Error('インスタンスが見つかりませんでした');
        }
        return instance;
    }
}