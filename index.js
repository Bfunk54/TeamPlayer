const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];

function createManager() {
  inquirer
  .prompt([
  {
      type: 'input',
      message: 'What is the name of the team manager?',
      name: 'manager_name'
  },
  { 

      type: 'input',
      message: 'What is the manager\'s id?',
      name: 'manager_id'
  },
  {
      type: 'input',
      message: 'What is the manager\'s email?',
      name: 'manager_email'
  },
  {

      type: 'input',
      message: 'What is the manager\'s office number?',
      name: 'manager_office'
  }
  ])
  .then((answers) => {
      const manager = new Manager(answers.manager_name, answers.manager_id, answers.manager_email, answers.manager_office);
      teamMembers.push(manager);
      createTeam();
  });
}

function createTeam() {
  inquirer
  .prompt([
  {
      type: 'list',
      message: 'Which type of team member would you like to add?',
      name: 'team_member',
      choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
  }
  ])
  .then((answers) => {
      if (answers.team_member === 'Engineer') {
          createEngineer();
      } else if (answers.team_member === 'Intern') {
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
      type: 'input',
      message: 'What is the engineer\'s name?',
      name: 'engineer_name'
  },
  {
      type: 'input',
      message: 'What is the engineer\'s id?',
      name: 'engineer_id'
  },
  {
      type: 'input',
      message: 'What is the engineer\'s email?',
      name: 'engineer_email'
  },
  {
      type: 'input',
      message: 'What is the engineer\'s GitHub username?',
      name: 'engineer_github'
  }
  ])
  .then((answers) => {
      const engineer = new Engineer(answers.engineer_name, answers.engineer_id, answers.engineer_email, answers.engineer_github);
      teamMembers.push(engineer);
      createTeam();
  });
}

function createIntern() {
  inquirer
  .prompt([
  {
      type: 'input',
      message: 'What is the intern\'s name?',
      name: 'intern_name'
  },
  {
      type: 'input',
      message: 'What is the intern\'s id?',
      name: 'intern_id'
  },
  {
      type: 'input',
      message: 'What is the intern\'s email?',
      name: 'intern_email'
  },
  {
      type: 'input',
      message: 'What is the intern\'s school?',
      name: 'intern_school'
  }
  ])
  .then((answers) => {
      const intern = new Intern(answers.intern_name, answers.intern_id, answers.intern_email, answers.intern_school);
      teamMembers.push(intern);
      createTeam();
  });
}

function finishTeam() {
  if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR)
  }
  fs.writeFileSync
  (distPath, render(teamMembers), 'utf-8');
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