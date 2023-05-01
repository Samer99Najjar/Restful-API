"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Employee_1 = require("./Employee");
var express = require('express');
var app = express();
var person1 = new Person_1.Person("person1", 23);
var person2 = new Person_1.Person("person2", 25);
var person3 = new Person_1.Person("person3", 24);
var employee1 = new Employee_1.Employee("employee1", 25, 1, 15000);
var employee2 = new Employee_1.Employee("employee2", 24, 2, 15000);
var employee3 = new Employee_1.Employee("employee3", 23, 3, 15000);
var person_arr = [person1, person2, person3];
var employes_arr = [employee1,
    employee2,
    employee3];
app.use(express.json());
app.get('/server', function (req, res) {
    res.send('Server is working fine');
});
app.get('/Person', function (req, res) {
    res.json(person_arr);
});
app.get('/Employee', function (req, res) {
    res.json(employes_arr);
});
//PORT
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("Listening on port ".concat(port, "...")); });
