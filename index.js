const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./src/page-template");
const reset = require("./reset");

const teamMembers = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the team manager?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      createTeam();
    });
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "team_member",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((answers) => {
      if (answers.team_member === "Engineer") {
        createEngineer();
      } else if (answers.team_member === "Intern") {
        createIntern();
      } else {
        finishTeam();
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      createTeam();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "intern_name",
      },
      {
        type: "input",
        message: "What is the intern's id?",
        name: "intern_id",
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "intern_email",
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "intern_school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.intern_name,
        answers.intern_id,
        answers.intern_email,
        answers.intern_school
      );
      teamMembers.push(intern);
      createTeam();
    });
}

function end() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Would you like to finish and view your team or reset and resart?",
          name: "end",
          choices: [
            "End",
            "Reset/Restart",
          ],
        },
      ])
      .then((answers) => {
        if (answers.end === "End") {
          console.log("Thank you for using Team Player!");
        } else if (answers.end === "Reset/Restart") {
          reset();
          createManager();
        }
      });
  }

function finishTeam() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, render(teamMembers), "utf-8");
  end();
}

createManager();

// function for creating manager - inquirer questions
// take those questions and create a new Manager with the user provided answers
// push that new Manager to the team members array

// follow the same pattern for each type of employee
// build a function for them that uses inquirer

// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js
