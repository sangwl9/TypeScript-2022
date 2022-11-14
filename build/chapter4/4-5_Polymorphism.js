"use strict";
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
const stringStorage = new LocalStorage();
stringStorage.get("ket");
stringStorage.set("sangwoo", "lee");
const booleanStorage = new LocalStorage();
booleanStorage.get("xx");
//booleanStorage.set("sangwoo", "lee");
booleanStorage.set("sangwoo", true);
