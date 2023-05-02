"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const Person_1 = require("./Person");
class Employee extends Person_1.Person {
    constructor(name_, age_, id_, salary_) {
        super(name_, age_);
        this.id = id_;
        this.salary = salary_;
    }
    work() {
        console.log(`Hello, my name is ${this.name} and my id is ${this.id} I am ${this.age} years old .`);
    }
    getSalary() {
        return this.salary;
    }
}
exports.Employee = Employee;
