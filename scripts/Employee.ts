import {Person} from './Person' ;
import fs from 'fs';
export class Employee extends Person{
    id: number;
    salary: number;
    constructor(name_: string , age_: number, id_: number, salary_:number){
        super(name_,age_);
        this.id=id_;
        this.salary=salary_;
    }
    work(){
        console.log(`Hello, my name is ${this.name} and my id is ${this.id} I am ${this.age} years old .`);
    }
    getSalary(){
        return this.salary;
    }


       // get all the employees list from the file employee.json
    static getAllEmployees() {
        const data = fs.readFileSync('./Employee.json', 'utf8');
        const employees = JSON.parse(data);
        return employees;
    }
      

       // add new emplpyee to file emloyees.json
    static addEmployee(personData: Employee) {
        let person = this.getAllEmployees();
        person.push(personData);
        fs.writeFileSync('./Employee.json', JSON.stringify(person));
    }

      // delete Employee from file Employee.json
    static deleteEmployee(personname: string):boolean{
        let person = this.getAllEmployees();
        const index = person.findIndex((p: { name: string; }) => p.name === personname);
        if (index === -1) {
          return false;
        }
        person.splice(index, 1);
        fs.writeFileSync('./Employee.json', JSON.stringify(person));
        return true;
    }

      // select person form the file Employee.json
    static SelectEmployee(personname: string){
        let all_person = this.getAllEmployees();
        let employee = all_person.find((p: { name: string; })=> p.name === personname);
        return employee;
    }

}

