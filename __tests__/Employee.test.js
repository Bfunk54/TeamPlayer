// Require the employee class
const Employee = require("./Employee");

describe('Employee class', () => {
  it('Creates an Employee object with all constructors', () => {
    let name = 'Darth Vader';
    let id = 1;
    let email = 'darthvader@sithlord.com';
    const employee = new Employee(name, id, email);

    expect(employee.name).toEqual(name)
    expect(employee.id).toEqual(id)
    expect(employee.email).toEqual(email)
    });
  });