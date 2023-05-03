"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const fs_1 = __importDefault(require("fs"));
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
    // get all the person list from the file person.json
    static getAllPersons() {
        const data = fs_1.default.readFileSync('./person.json', 'utf8');
        const persons = JSON.parse(data);
        return persons;
    }
    // add new person to file person.json
    static addPerson(personData) {
        let person = this.getAllPersons();
        person.push(personData);
        fs_1.default.writeFileSync('./person.json', JSON.stringify(person));
    }
    // delete person from file person.json
    static deletePerson(personname) {
        let person = this.getAllPersons();
        const index = person.findIndex((p) => p.name === personname);
        if (index === -1) {
            return false;
        }
        person.splice(index, 1);
        fs_1.default.writeFileSync('./person.json', JSON.stringify(person));
        return true;
    }
    // select person form the file person.json
    static SelectPerson(personname) {
        let all_person = this.getAllPersons();
        let person = all_person.find((p) => p.name === personname);
        return person;
    }
}
exports.Person = Person;
