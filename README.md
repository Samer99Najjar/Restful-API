# Restful-API
## Task:
> Create a simple TypeScript class with methods and inheritance, and connect it to an API

# Run Locally
> git clone https://github.com/Samer99Najjar/Restful-API.git

## Go to the project directory and Open Terminal
> cd Restful-API

## Installations:
In order to run the project you need to install this commands:
> npm i --save-dev @types/node

> npm install express

## Run Project
> tcs

> node app.js


At this point you should see that the server started running 

## Open Postman from google chrome and start: http://localhost:3000

Now you can enter any the commands you want 

# Example

> GET http://localhost:3000/Employee to get all the employees  :
![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/show_employeepic.PNG)

> GET http://localhost:3000/Employee/employee1 to get information about empolyee with name "employee1":
![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/get_employeebyname.PNG)

> Post http://localhost:3000/Employee  then in the body type the employee name should add new employee:
![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/add_employee.PNG)

> Delete http://localhost:3000/Employee/employee1 Deletes "employee1":
![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/delete_employee.PNG)

> GET http://localhost:3000/Employee to see updated employee list   :
![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/get_empolyeeafterDeleteAdd.PNG)


