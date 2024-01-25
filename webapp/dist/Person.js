"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name) {
        if (typeof name !== undefined) {
            this._name = name;
        }
    }
    get Name() {
        return this._name;
    }
}
exports.Person = Person;
