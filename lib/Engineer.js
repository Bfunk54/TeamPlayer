// Require the employee class
const Employee = require("./Employee");

// Extend the employee class to create the engineer class
class Engineer extends Employee {
  // Give it a constructor with the properties name, id, email, and github
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // A method to get the github username of the engineer
  getGithub() {
    return this.github;
  }

  // A method to get the role of the engineer
  getRole() {
    return "Engineer";
  }
}

// Export the Engineer class
module.exports = Engineer;
