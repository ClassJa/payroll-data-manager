// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  
    let moreEmployees = true
    let employeesArray = []
    while (moreEmployees) {
      // create employee here
      const firstName = prompt("Enter an employee's first name")
      const lastName = prompt("Enter an employee's last name")
      const salary = prompt("Enter an employee's salary", 0)
      // Defaults the employee's salary to 0
      const employee = {
        firstName: firstName,
        lastName: lastName,
        salary: salary
      }
      employeesArray.push(employee)
      moreEmployees = confirm("Do you want to add more employees?")
    }
    return employeesArray.sort()
    // To do : figute out how to sort by last name 
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let salaryTotal = 0
  let count = 0
  let avg = 0
  for (let i = 0; i < employeesArray.length; i++) {
    count += 1 
    // count variable keeps track of the total number of employees are used (so it can take the average)
    console.log(employeesArray)
    salaryTotal += employeesArray[i].salary
  }
  avg = parseInt(salaryTotal/count)
  console.log(avg)
  return avg
  // Debug why it is returning the avg of 80 + 80  to be 4040 instead of 80. Has something to do with the type 
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  for (let i = 0; i < employeesArray.length; i++) {
    // randomNum will only be between 0 and 1
    randomNum = Math.random()
    randomEmployeeIndex = employeesArray[randomNum] * employeesArray.length
    randomEmployeeIndex = randomEmployeeIndex.floor
    console.log(randomNum)
    employeeFullName = `${employeesArray[randomEmployeeIndex].firstName, employeesArray[randomEmployeeIndex].lastNameName} `
  }
  console.log(employeeFullName)
  return employeeFullName
  // Debug why it is printing out NaN when console.logging the randomEmployee
  // Expected to print o
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
