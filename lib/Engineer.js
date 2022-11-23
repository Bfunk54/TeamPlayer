const Employee = require('./Employee');

class Engineer extends Employee {
    
    constructor(name, id, email) {
      super(name, id, email);
      this.github = github;
    }

    getGithub() {
        return "github.com/" + this.github;
      }
  
    getRole() {
      return "Engineer";
    }
  
  }
  
  module.exports = Engineer;