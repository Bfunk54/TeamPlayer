// // Require the employee class
const Employee = require("./Employee");
const Engineer = require("./Engineer");

describe("Engineer class", () => {
  it("Creates an Engineer object with all constructors", () => {
    let name = "Darth Vader";
    let id = 1;
    let email = "darthvader@sithlord.com";
    let github = "theOfficialSithLordVader";
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.name).toEqual(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.email).toEqual(email);
    expect(engineer.github).toEqual(github);
    });
    });

describe("Engineer class getGithub method", () => {
    it("Grabs and returns the engineer github", () => {
        let github = "theOfficialSithLordVader";
        const engineer = new Engineer(github);

        expect(engineer.github).toEqual(github);
    });
});

describe("Engineer class getRole method", () => {
    it("Grabs and returns the engineer role", () => {
        let role = "Engineer";
        const engineer = new Engineer(role);

        expect(engineer.role).toEqual(role);
    });
}
);
