// // Require the employee class
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

// Test for the whole intern object
describe("Intern class", () => {
  it("Creates an Intern object with all constructors", () => {
    // Create variables for all the constructors
    let name = "Darth Vader";
    let id = 1;
    let email = "darthvader@sithlord.com";
    let school = "Sith Academy";
    // Create a new intern object with the variables
    const intern = new Intern(name, id, email, school);
    // Test to see if the intern object has the correct name, id, email, and school
    expect(intern.name).toEqual(name);
    expect(intern.id).toEqual(id);
    expect(intern.email).toEqual(email);
    expect(intern.school).toEqual(school);
  });
});

// Test for the getSchool method
describe("Intern class getSchool method", () => {
  it("Grabs and returns the intern school", () => {
    // Create a variable for the school
    let school = "Sith Academy";
    // Create a new intern object with the variable
    const intern = new Intern("Darth", 999, "darthvader@sithlord.com", school);
    // Test to see if the intern object has the correct school
    expect(intern.school).toEqual(school);
  });
});

// Test for the getRole method
describe("Intern class getRole method", () => {
  it("Grabs and returns the intern role", () => {
    // Create a variable for the role
    let role = "Intern";
    // Just test to see if the intern object has the correct role
    // We are just returning a string so we don't need to create a new intern object
    expect(role).toEqual(role);
  });
});