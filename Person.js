"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name_, age_) {
        this.name = name_;
        this.age = age_;
    }
    Person.prototype.greet = function () {
        console.log("Hello i am ," + this.name);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
exports.Person = Person;
