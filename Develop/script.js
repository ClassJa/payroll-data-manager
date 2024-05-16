// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
    let moreEmployees = true
    let employeesArray = []
    while (moreEmployees) {
      const firstName = prompt("Enter an employee's first name")
      const lastName = prompt("Enter an employee's last name")
      let salary;

      let enteredSalary = Number(prompt("Enter an employee's salary", 0))
      while (isNaN(enteredSalary) && enteredSalary !== 0) {
        alert("Salary must be a number")
        enteredSalary = Number(prompt("Enter an employee's salary", 0))
      }
      salary = enteredSalary
      // uses all of the valid prompted inputs from the user to create an employee object
        const employee = {
          firstName: firstName,
          lastName: lastName,
          salary: salary
        }
      employeesArray.push(employee)
      moreEmployees = confirm("Do you want to add more employees?")
    }
    return employeesArray
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Creating variables that will be used in the function
  let salaryTotal = Number(0)
  let totalEmployees = employeesArray.length
  let avg;
  for (let i = 0; i < totalEmployees; i++) {
    // loop through each employee and accessing that employee's salary property
    salaryTotal += employeesArray[i].salary
  }
  avg = salaryTotal/totalEmployees
  console.log(`The average salary is ${avg}`)
  // Accounting for grammar depending on the number of employees present
  if (totalEmployees <= 1) {
    console.log(`The number of employees is ${totalEmployees}`)
  } else {
    console.log(`The number of employees are ${totalEmployees}`)
  }
  return avg
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  for (let i = 0; i < employeesArray.length; i++) {
    // randomNum will only be between 0 and 1
    let randomNum = Math.random()
    // multiplying the randomNum by the length of the employee array to ensure a number that will range between the employees in the array
    let randomEmployeeIndex = Math.floor(employeesArray.length * randomNum)
    let randomEmployee = employeesArray[randomEmployeeIndex]
    let employeeFullName = `${randomEmployee.firstName} ${randomEmployee.lastName}`
    console.log(employeeFullName)
    return employeeFullName
  }
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
