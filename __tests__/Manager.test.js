// // Require the employee class
const Employee = require("./Employee");
const Manager = require("./Manager");

describe("Manager class", () => {
  it("Creates an Manager object with all constructors", () => {
    let name = "Darth Vader";
    let id = 1;
    let email = "darthvader@sithlord.com";
    let officeNumber = 999;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toEqual(name);
    expect(manager.id).toEqual(id);
    expect(manager.email).toEqual(email);
    expect(manager.officeNumber).toEqual(officeNumber);
  });
});

describe("Manager class getOfficeNumber method", () => {
  it("Grabs and returns the manager office number", () => {
    let officeNumber = 999;
    const manager = new Manager(officeNumber);

    expect(manager.officeNumber).toEqual(officeNumber);
  });
});

describe("Manager class getRole method", () => {
  it("Grabs and returns the manager role", () => {
    let role = "Manager";
    const manager = new Manager(role);

    expect(manager.role).toEqual(role);
  });
});