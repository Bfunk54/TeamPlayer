const makeTeam = (team) => {
  // grab the html body to append the new team to
  const body = document.querySelector("body");

  // create the manager html
  const makeManager = (manager) => {
    // make a div for the manager
    const managerDiv = document.createElement("div");
    managerDiv.classList.add("manager");
    // add the data to the div
    managerDiv.innerHTML = `
        <div> 
        <h1>${manager.getName()}</h1>
        <h2> Manager </h2>
        <div class='col'>
        <div class='row'> <p> ID: ${manager.getId()}</p> </div>
        <div class='row'> <p> Email: ${manager.getEmail()}</p> </div>
        <div class='row'> <p> Office Number: ${manager.getOfficeNumber()}</p> </div>
        <button class='new-manager'> Create Manager </button>
        </div>
        `;

    // append the manager to the body
    body.appendChild(managerDiv);
    // push the manager to the team array
    team.push(manager);
  };

  // create the html for engineers
  const makeEngineer = (engineer) => {
    // make a div for the engineer
    const engineerDiv = document.createElement("div");
    engineerDiv.classList.add("engineer");
    // add the data to the div
    engineerDiv.innerHTML = `
        <div> 
        <h1>${engineer.getName()}</h1>
        <h2> Engineer </h2>
        <div class='col'>
        <div class='row'> <p> ID: ${engineer.getId()}</p> </div>
        <div class='row'> <p> Email: ${engineer.getEmail()}</p> </div>
        <div class='row'> <p> Github: https://github.com/${engineer.getGithub()}</p> </div>
        </div>
        `;
    // append the engineer to the body
    body.appendChild(engineerDiv);
    // push the engineer to the team array
    team.push(engineer);
  };

  // create the html for interns
  const makeIntern = (intern) => {
    // make a div for the intern
    const internDiv = document.createElement("div");
    internDiv.classList.add("intern");
    // add the data to the div
    internDiv.innerHTML = `
        <div> 
        <h1>${intern.name}</h1>
        <h2> Intern </h2>
        <div class='col'>
        <div class='row'> <p> ID: ${intern.id}</p> </div>
        <div class='row'> <p> Email: ${intern.email}</p> </div>
        <div class='row'> <p> School: ${intern.getSchool()}</p> </div>
        </div>
        `;
    // append the intern to the body
    body.appendChild(internDiv);
    // push the intern to the team array
    team.push(intern);
  };

  // use the team array to generate pieces of html based on the employee role
};

module.exports = (team) => {
  // template literal - html body that calls the generate team function
  const makeTeamDiv = document.createElement("div");
  makeTeamDiv.classList.add("make-team");
  // make a button to generate the team
  makeTeamDiv.innerHTML = `
    <button class='new-team'> Create New Team </button>
    `;
  // append the button to the body
  body.appendChild(makeTeamDiv);
  const button = document.querySelector("button");
  // add an event listener to the button to generate the team
  button.addEventListener("click", () => {
    makeTeam();
  });
};
