"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const Employee_1 = require("./Employee");
const express = require('express');
const app = express();
app.use(express.json());
let employee1 = new Employee_1.Employee("employee1", 25, 1, 15000);
let employee2 = new Employee_1.Employee("employee2", 24, 2, 15000);
let employee3 = new Employee_1.Employee("employee3", 23, 3, 15000);
let employes_arr = [employee1,
    employee2,
    employee3];
app.use(express.json());
// Server is Working msg
app.get('/', (req, res) => {
    res.send('Server is working fine');
});
// Get all Persons and print them   
app.get('/Person', (req, res) => {
    const All_Persons = Person_1.Person.getAllPersons();
    res.send(All_Persons);
});
// Get all employees and print them   
app.get('/Employee', (req, res) => {
    let all_employees = Employee_1.Employee.getAllEmployees();
    res.send(all_employees);
});
//Get a specific person by Name 
app.get('/Person/:name', (req, res) => {
    let name = req.params.name;
    let person = Person_1.Person.SelectPerson(name);
    if (!person) //404
     {
        res.status(404).send('The person with the given name was not found');
    }
    else {
        res.send(person);
    }
});
//Add Person 
app.post('/Person', (req, res) => {
    if (!req.body.name || req.body.length < 3) {
        //400 bad request
        res.status(400).send("You must enter Name and More than 3 letters");
        return;
    }
    let new_person = new Person_1.Person(req.body.name, 25);
    Person_1.Person.addPerson(new_person);
    res.send(new_person);
});
//Delete Person
app.delete('/Person/:name', (req, res) => {
    // look up the person
    const name = req.params.name;
    const result = Person_1.Person.deletePerson(name);
    if (result === false) //404 if not found 
     {
        res.status(404).send('The person with the given name was not found');
    }
    else {
        res.send('Person deleted');
    }
});
//Get a specific Employee by Name 
app.get('/Employee/:name', (req, res) => {
    let name = req.params.name;
    let employe = Employee_1.Employee.SelectEmployee(name);
    if (!employe) //404
     {
        res.status(404).send('The person with the given name was not found');
    }
    else {
        res.send(employe);
    }
});
//Add Person 
app.post('/Employee', (req, res) => {
    if (!req.body.name || req.body.length < 3) {
        //400 bad request
        res.status(400).send("You must enter Name and More than 3 letters");
        return;
    }
    let new_employ = new Employee_1.Employee(req.body.name, employes_arr.length, 25, 8000);
    Employee_1.Employee.addEmployee(new_employ);
    res.send(new_employ);
});
//Delete Employee
app.delete('/Employee/:name', (req, res) => {
    // look up the person
    const name = req.params.name;
    const result = Employee_1.Employee.deleteEmployee(name);
    if (result === false) //404 if not found 
     {
        res.status(404).send('The person with the given name was not found');
    }
    else {
        res.send('Person deleted');
    }
});
//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
