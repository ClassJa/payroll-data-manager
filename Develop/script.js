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
      let salary;

      let enteredSalary = Number(prompt("Enter an employee's salary", 0))
      while (isNaN(enteredSalary) && enteredSalary !== 0) {
        alert("Salary must be a number")
        enteredSalary = Number(prompt("Enter an employee's salary", 0))
      }
      salary = enteredSalary
        const employee = {
          firstName: firstName,
          lastName: lastName,
          salary: salary
        }
      employeesArray.push(employee)
      moreEmployees = confirm("Do you want to add more employees?")
    }
    return employeesArray.sort()
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // salary = Number(salary);
  // if (Number.isNan(salary)) {
  //   alert("Salary must be a number")
  // }
  let salaryTotal;
  let avg;
  for (let i = 0; i < employeesArray.length; i++) {
    // count variable keeps track of the total number of employees and is used to take the average)
    console.log(employeesArray)
    salaryTotal += employeesArray[i].salary
    console.log(salaryTotal)
    avg += parseInt(salaryTotal/i+1)
    console.log(avg)
  }
  return avg
  // Debug why it is returning the avg of 80 + 80  to be 4040 instead of 80. Has something to do with the type 
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  for (let i = 0; i < employeesArray.length; i++) {
    // randomNum will only be between 0 and 1
    let randomNum = Math.random()
    let randomEmployeeIndex = Math.floor(employeesArray.length * randomNum)
    console.log(randomEmployeeIndex)
    let randomEmployee = employeesArray[randomEmployeeIndex]
    let employeeFullName = `${randomEmployee.firstName} ${randomEmployee.lastName}`
    console.log(employeeFullName)
    return employeeFullName
  }
  // return employeeFullName
  // Why is employeeFullName not being returned? Error says it is undefined (shouldn't it still be in scope?)
  // Debug why it is printing out NaN when console.logging the randomEmployee
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
