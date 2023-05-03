"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const Person_1 = require("./Person");
const fs_1 = __importDefault(require("fs"));
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
    // get all the employees list from the file employee.json
    static getAllEmployees() {
        const data = fs_1.default.readFileSync('./Employee.json', 'utf8');
        const employees = JSON.parse(data);
        return employees;
    }
    // add new emplpyee to file emloyees.json
    static addEmployee(personData) {
        let person = this.getAllEmployees();
        person.push(personData);
        fs_1.default.writeFileSync('./Employee.json', JSON.stringify(person));
    }
    // delete Employee from file Employee.json
    static deleteEmployee(personname) {
        let person = this.getAllEmployees();
        const index = person.findIndex((p) => p.name === personname);
        if (index === -1) {
            return false;
        }
        person.splice(index, 1);
        fs_1.default.writeFileSync('./Employee.json', JSON.stringify(person));
        return true;
    }
    // select person form the file Employee.json
    static SelectEmployee(personname) {
        let all_person = this.getAllEmployees();
        let employee = all_person.find((p) => p.name === personname);
        return employee;
    }
}
exports.Employee = Employee;
