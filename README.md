# Restful-API
![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/sealights-logo.jpg)

## Task
Create a simple TypeScript class with methods and inheritance, and connect it to an API.

## Classes 
The classes used in the Project are Person class which have 2 attributes age and name , and Class Employee that is inherits from Person and have
extra 2 attributes that are Salary and ID , And a logger class .

## Design Patterns
In this Task I used the Design Pattern Singelton implemented in the class Logger, since it's only make sense to have one logger in the App.

So by using the singleton and making the constructor private i limited the number of instances of that class to only 1.

And that logger is responsible for making messages when event happens.

## Data 
The data of employees and people are saved in files person.json and employee.json found in the scripts library.

The data is read from this files and when changed it is also changed in the files in order to have Data Persistence.  

## Commands
All the Postman commands are written in a txt file named PostManCommands you can check them there and see the examples down in the examples section

## Run Locally
1. Clone the repository:
    ```
    git clone https://github.com/Samer99Najjar/Restful-API.git
    ```
2. Go to the project directory and open the Terminal:
    ```
    cd Restful-API
    ```
3. Run the project:
    ```
    npm intall
    ```
    ```
    npx tsc
    ```
    ```
    cd scripts
    ```
    ```
    nodemon app.ts
    ```

    At this point, you should see that the server has started running.

4. Open Postman in Google Chrome and start: http://localhost:3000.

Now you can enter any of the commands you want.

### Examples
* `GET http://localhost:3000/Employee` to get all the employees:
  ![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/show_employeepic.PNG)
  
* `GET http://localhost:3000/Employee/employee1` to get information about the employee with name "employee1":
  ![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/get_employeebyname.PNG)
  
* `POST http://localhost:3000/Employee` then in the body, type the employee name to add a new employee:
  ![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/add_employeenew.PNG)
  
* `DELETE http://localhost:3000/Employee/employee1` to delete "employee1":
  ![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/delete_employee.PNG)
  
* `GET http://localhost:3000/Employee` to see the updated employee list:
  ![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/get_empolyeeafterDeleteAdd.PNG)
  
* `GET http://localhost:3000/Person` to see the all People list:
![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/getallperson.PNG)

* `POST http://localhost:3000/Person` then in the body, type the person name and age to add a new person:
  ![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/addPerson.PNG)
  
* `GET http://localhost:3000/Person` to see the all People list updated:
![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/getallperson2.PNG)
  
  
  
 * Terminal example :
 
   ![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/terminal_pic.PNG)
 
