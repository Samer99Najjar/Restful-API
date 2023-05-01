import {Person} from './Person' ;
import {Employee} from './Employee' ;

const express = require ('express');
const app = express();


let person1 = new Person("person1",23);
let person2 = new Person("person2",25);
let person3 = new Person("person3",24);

let employee1 = new Employee("employee1",25,1,15000);
let employee2 = new Employee("employee2",24,2,15000);
let employee3 = new Employee("employee3",23,3,15000);

let person_arr=[person1,person2,person3];
let employes_arr= [employee1
    ,employee2
    ,employee3];

app.use(express.json());

app.get('/server' , (req: any,res: { send: (arg0: string) => void; }) => {
    res.send('Server is working fine');

});

app.get('/Person',(req: any,res: {
    [x: string]: any; send: (arg0: number[]) => void; 
})=>{
    res.json(person_arr);
});

app.get('/Employee',(req: any,res: {
    json(employes_arr: Employee[]): unknown; send: (arg0: number[]) => void; 
})=>{
    res.json(employes_arr);
});

//PORT
const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`Listening on port ${port}...`));