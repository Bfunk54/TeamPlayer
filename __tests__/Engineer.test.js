// // Require the employee class
const Employee = require("./Employee");
const Engineer = require("./Engineer");

// Test for the whole engineer object
describe("Engineer class", () => {
  it("Creates an Engineer object with all constructors", () => {
    // Create variables for all the constructors
    let name = "Darth Vader";
    let id = 1;
    let email = "darthvader@sithlord.com";
    let github = "theOfficialSithLordVader";
    // Create a new engineer object with the variables
    const engineer = new Engineer(name, id, email, github);
    // Test to see if the engineer object has the correct name, id, email, and github
    expect(engineer.name).toEqual(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.email).toEqual(email);
    expect(engineer.github).toEqual(github);
    });
    });

// Test for the getGithub method
describe("Engineer class getGithub method", () => {
    it("Grabs and returns the engineer github", () => {
    // Create a variable for the github
        let github = "theOfficialSithLordVader";
    // Create a new engineer object with the variable
        const engineer = new Engineer(github);
        // Test to see if the engineer object has the correct github
        expect(engineer.github).toEqual(github);
    });
});

// Test for the getRole method
describe("Engineer class getRole method", () => {
    it("Grabs and returns the engineer role", () => {
    // Create a variable for the role
        let role = "Engineer";
    // Create a new engineer object with the variable
        const engineer = new Engineer(role);
        // Test to see if the engineer object has the correct role
        expect(engineer.role).toEqual(role);
    });
}
);
