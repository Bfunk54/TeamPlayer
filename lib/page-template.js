const makeTeam = (team) => {
  // grab the html body to append the new team to
  const body = document.querySelector("body");

  // create the manager html
  const makeManager = (manager) => {
    // return a template literal with a div for the manager
    return `
        <div> 
        <h1>${manager.getName()}</h1>
        <h2> Manager </h2>
        <div col>
        <div row> <p> ID: ${manager.getId()}</p> </div>
        <div row> <p> Email: ${manager.getEmail()}</p> </div>
        <div row> <p> Office Number: ${manager.getOfficeNumber()}</p> </div>
        </div>
        `;
  };

  // create the html for engineers
  const makeEngineer = (engineer) => {
    // make a div for the engineer
    return `
        <div> 
        <h1>${engineer.getName()}</h1>
        <h2> Engineer </h2>
        <div col>
        <div row> <p> ID: ${engineer.getId()}</p> </div>
        <div row> <p> Email: ${engineer.getEmail()}</p> </div>
        <div row> <p> Github: https://github.com/${engineer.getGithub()}</p> </div>
        </div>
        `;
  };

  // create the html for interns
  const makeIntern = (intern) => {
    // make a div for the intern
    return `
        <div> 
        <h1>${intern.getName()}</h1>
        <h2> Intern </h2>
        <div col>
        <div row> <p> ID: ${intern.getId()}</p> </div>
        <div row> <p> Email: ${intern.getEmail()}</p> </div>
        <div row> <p> School: ${intern.getSchool()}</p> </div>
        </div>
        `;
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
