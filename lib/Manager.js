// Require the employee class
const Employee = require('./Employee');

// Extend the employee class to create the manager class
class Manager extends Employee {
    
  // Give it a constructor with the properties name, id, email, and officeNumber
    constructor(name, id, email) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }

    // A method to get the role of the manager
    getRole() {
      return "Manager";
    }
  
  }
  
  module.exports = Manager;