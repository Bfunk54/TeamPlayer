// // Require the employee class
const Employee = require("./Employee");
const Intern = require("./Intern");

describe("Intern class", () => {
  it("Creates an Intern object with all constructors", () => {
    let name = "Darth Vader";
    let id = 1;
    let email = "darthvader@sithlord.com";
    let school = "Sith Academy";
    const intern = new Intern(name, id, email, school);

    expect(intern.name).toEqual(name);
    expect(intern.id).toEqual(id);
    expect(intern.email).toEqual(email);
    expect(intern.school).toEqual(school);
  });
});

describe("Intern class getSchool method", () => {
  it("Grabs and returns the intern school", () => {
    let school = "Sith Academy";
    const intern = new Intern(school);

    expect(intern.school).toEqual(school);
  });
});
