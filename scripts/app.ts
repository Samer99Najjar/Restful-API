import { Person } from './Person';
import {Employee} from './Employee' ;
import fs from 'fs';
import { basename } from 'path';
import { Logger } from './logger';

const express = require ('express');
const app = express();

app.use(express.json());

const logger = Logger.getInstance();
logger.setLogLevel("Debug");
logger.log("This is a debug message");



app.use(express.json());


// Server is Working msg
app.get('/' , (req: any,res: any) => {
    logger.info('Pending Server');
    res.send('Server is working fine');

});

// Get all Persons and print them   
app.get('/Person',(req: any,res: any)=>{
    logger.log("getting all people in the database ");
    const All_Persons = Person.getAllPersons();
    
    res.send(All_Persons);
    });


// Get all employees and print them   
app.get('/Employee',(req: any,res: any)=>{
    logger.log("getting all employees in the database ");
    let all_employees= Employee.getAllEmployees();
    res.send(all_employees);
});


//Get a specific person by Name 
app.get('/Person/:name',(req: any,res: any)=>{
    
    logger.log("getting Person by name ");
    let name = req.params.name;
    let person= Person.SelectPerson(name);
    if(!person) //404
    {
        logger.error("Data base doesn't have this name ");
        res.status(404).send('The person with the given name was not found');
    }
    else{
    res.send(person);
    }
});


//Add Person 
app.post('/Person',(req:any,res:any)=>{

    logger.log("Adding new person to the database ");
    if (!req.body.name || req.body.length <3){
        //400 bad request
        logger.warn("Name is short ");
        res.status(400).send("You must enter Name and More than 3 letters");
        return ;
    }
  
    let new_person = new Person(req.body.name ,req.body.age);
    Person.addPerson(new_person);
    res.send(new_person);

});
//Delete Person
app.delete('/Person/:name',(req:any,res:any)=>{
    // look up the person
    logger.log("Deleting  person from the database ");
    const name = req.params.name;
    const result=Person.deletePerson(name);
    if(result===false) //404 if not found 
    {
        logger.error("The Person with this name is not found");
        res.status(404).send('The person with the given name was not found');
    }
    else{
        res.send('Person deleted');
    }
 
});



//Get a specific Employee by Name 
app.get('/Employee/:name',(req: any,res: any)=>{
    
    logger.log("Getting  Employee from the database ");
    let name=req.params.name;
    let employe= Employee.SelectEmployee(name);
    if(!employe) //404
    {   
        logger.error("This  Employee doesn't exist ");
        res.status(404).send('The Employee with the given name was not found');
    }
    else{
    res.send(employe);
    }
});


//Add Person 
app.post('/Employee',(req:any,res:any)=>{

        
    logger.log("Adding   Employee from the database ");

    if (!req.body.name || req.body.length <3){
        //400 bad request
        logger.warn("the name is to short ");
        res.status(400).send("You must enter Name and More than 3 letters");
        return ;
    }
    
    let new_employ = new Employee(req.body.name ,req.body.id,req.body.age,req.body.salary);

    Employee.addEmployee(new_employ);
    res.send(new_employ);

});


//Delete Employee
app.delete('/Employee/:name',(req:any,res:any)=>{
    // look up the person
    logger.log("Deleting  Employee from the database ");
    const name = req.params.name;
    const result=Employee.deleteEmployee(name);
    if(result === false) //404 if not found 
    {   
        logger.error("This employee doesn't exist ");
        res.status(404).send('The person with the given name was not found');
    }
    else{
        
        res.send('Person deleted');
    }
 
});


//PORT
const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`Listening on port ${port}...`));