// Create the Employee class
class Employee {
  // Give it a constructor with the properties name, id, and email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // A method to get the name of the employee
  getName() {
    return this.name;
  }

  // A method to get the id of the employee
  getId() {
    return this.id;
  }

  // A method to get the email of the employee
  getEmail() {
    return this.email;
  }

  // A method to get the role of the employee
  getRole() {
    return "Employee";
  }
}

// Export the Employee class
module.exports = Employee;
