import {Person} from './Person' ;

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

}

