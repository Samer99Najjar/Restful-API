"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name_, age_) {
        this.name = name_;
        this.age = age_;
    }
    greet() {
        console.log("Hello i am ," + this.name);
    }
    getAge() {
        return this.age;
    }
}
exports.Person = Person;
