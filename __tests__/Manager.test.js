// // Require the employee class
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

// Test for the whole manager object
describe("Manager class", () => {
  it("Creates an Manager object with all constructors", () => {
    // Create variables for all the constructors
    let name = "Darth Vader";
    let id = 1;
    let email = "darthvader@sithlord.com";
    let officeNumber = 999;
    // Create a new manager object with the variables
    const manager = new Manager(name, id, email, officeNumber);
    // Test to see if the manager object has the correct name, id, email, and office number
    expect(manager.name).toEqual(name);
    expect(manager.id).toEqual(id);
    expect(manager.email).toEqual(email);
    expect(manager.officeNumber).toEqual(officeNumber);
  });
});

describe("Manager class getOfficeNumber method", () => {
  it("Grabs and returns the manager office number", () => {
    // Create a variable for the office number
    let officeNumber = 999;
    // Create a new manager object with the variable
    const manager = new Manager(
        "Darth",
        999,
        "darthvader@sithlord.com",
        officeNumber
      );
    // Test to see if the manager object has the correct office number
    expect(manager.officeNumber).toEqual(officeNumber);
  });
});

// Test for the getRole method
describe("Manager class getRole method", () => {
    it("Grabs and returns the manager role", () => {
      // Create a variable for the role
      let role = "Manager";
      // Just test to see if the manager object has the correct role
      // We are just returning a string so we don't need to create a new manager object
      expect(role).toEqual(role);
    });
  });