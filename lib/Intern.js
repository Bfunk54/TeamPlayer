// Require the employee class
const Employee = require("./Employee");

// Extend the employee class to create the intern class
class Intern extends Employee {
  // Give it a constructor with the properties name, id, email, and school
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // A method to get the school of the intern
  getSchool() {
    return this.school;
  }

  // A method to get the role of the intern
  getRole() {
    return "Intern";
  }
}

// Export the Intern class
module.exports = Intern;
