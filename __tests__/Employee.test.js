// Require the employee class
const Employee = require("./Employee");

describe("Employee class", () => {
  it("Creates an Employee object with all constructors", () => {
    let name = "Darth Vader";
    let id = 1;
    let email = "darthvader@sithlord.com";
    const employee = new Employee(name, id, email);

    expect(employee.name).toEqual(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toEqual(email);
  });
});

describe("Employee class getName method", () => {
  it("Grabs and returns the employee name", () => {
    let name = "Darth Vader";
    const employee = new Employee(name);

    expect(employee.name).toEqual(name);
  });
});

describe("Employee class getId method", () => {
  it("Grabs and returns the employee id", () => {
    let id = 1;
    const employee = new Employee(id);

    expect(employee.id).toEqual(id);
  });
});

describe("Employee class getEmail method", () => {
  it("Grabs and returns the employee email", () => {
    let email = "darthvader@sithlord.com";
    const employee = new Employee(email);

    expect(employee.email).toEqual(email);
  });
});

describe("Employee class getRole method", () => {
  it("Grabs and returns the employee role", () => {
    let role = "Employee";
    const employee = new Employee(role);

    expect(employee.role).toEqual(role);
  });
});
