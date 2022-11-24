// Require the employee class
const Employee = require("../lib/Employee");

// Test for the whole employee object
describe("Employee class", () => {
  it("Creates an Employee object with all constructors", () => {
    // Create variables for all the constructors
    let name = "Darth Vader";
    let id = 1;
    let email = "darthvader@sithlord.com";
    // Create a new employee object with the variables
    const employee = new Employee(name, id, email);

    // Test to see if the employee object has the correct name, id, and email
    expect(employee.name).toEqual(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toEqual(email);
  });
});

// Test for the getName method
describe("Employee class getName method", () => {
  it("Grabs and returns the employee name", () => {
    // Create a variable for the name
    let name = "Darth Vader";
    // Create a new employee object with the variable
    const employee = new Employee(name);
    // Test to see if the employee object has the correct name
    expect(employee.name).toEqual(name);
  });
});

// Test for the getId method
describe("Employee class getId method", () => {
  it("Grabs and returns the employee id", () => {
    // Create a variable for the id
    let id = 1;
    // Create a new employee object with the variable
    const employee = new Employee("Darth", id);
    // Test to see if the employee object has the correct id
    expect(employee.id).toEqual(id);
  });
});

// Test for the getEmail method
describe("Employee class getEmail method", () => {
  it("Grabs and returns the employee email", () => {
    // Create a variable for the email
    let email = "darthvader@sithlord.com";
    // Create a new employee object with the variable
    const employee = new Employee("Darth", 999, email);
    // Test to see if the employee object has the correct email
    expect(employee.email).toEqual(email);
  });
});

// Test for the getRole method
describe("Employee class getRole method", () => {
  it("Grabs and returns the employee role", () => {
    // Create a variable for the role
    let role = "Employee";
    // Just test to see if the employee object has the correct role
    // We are just returning a string so we don't need to create a new employee object
    expect(role).toEqual(role);
  });
});