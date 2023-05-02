# Restful-API
![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/sealights-logo.jpg)

## Task:
Create a simple TypeScript class with methods and inheritance, and connect it to an API.

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
    tcs
    ```
    ```
    cd scripts
    ```
    ```
    node app.js
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
  ![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/add_employee.PNG)
  
* `DELETE http://localhost:3000/Employee/employee1` to delete "employee1":
  ![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/delete_employee.PNG)
  
* `GET http://localhost:3000/Employee` to see the updated employee list:
  ![alt text](https://github.com/Samer99Najjar/Restful-API/blob/main/pics/get_empolyeeafterDeleteAdd.PNG)
