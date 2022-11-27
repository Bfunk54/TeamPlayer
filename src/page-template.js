const makeTeam = (team) => {
  // create the manager html
  const makeManager = (manager) => {
    // return a template literal with a div for the manager
    return `
        <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${manager.getName()}</span>
          <h6> Manager </h6>
          <p> ID: ${manager.getId()}</p>
          <p> Email: ${manager.getEmail()}</p>
          <p> Office Number: ${manager.getOfficeNumber()}</p>
        </div>
      </div>
        `;
  };

  // create the html for engineers
  const makeEngineer = (engineer) => {
    // make a div for the engineer
    return `
        <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${engineer.getName()}</span>
          <h6> Engineer </h6>
          <p> ID: ${engineer.getId()}</p>
          <p> Email: ${engineer.getEmail()}</p>
          <p> Github: https://www.github.com/${engineer.getGithub()}</p>
        </div>
      </div>
        `;
  };

  // create the html for interns
  const makeIntern = (intern) => {
    // make a div for the intern
    return `
        <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${intern.getName()}</span>
          <h6> Intern </h6>
          <p> ID: ${intern.getId()}</p>
          <p> Email: ${intern.getEmail()}</p>
          <p> School: ${intern.getSchool()}</p>
        </div>
      </div>
        `;
  };

  // use the team array to generate pieces of html based on the employee role
  const html = [];

  // loop through the team array
  for (let i = 0; i < team.length; i++) {
    console.log(team[i].getRole());
    //Switch statement to determine which type of employee is being added
    switch (true) {
      case team[i].getRole() === "Manager":
        console.log("Manager is happening");
        html.push(makeManager(team[i]));
        break;
      case team[i].getRole() === "Engineer":
        console.log("Engineer is happening");
        html.push(makeEngineer(team[i]));
        break;
      case team[i].getRole() === "Intern":
        html.push(makeIntern(team[i]));
        break;
    }
  }
  return html.join("");
};

module.exports = (team) => {
  // template literal - html body that calls the generate team function
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Player</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link rel="stylesheet" href="/css/style.css">
</head>
      <nav>
        <div class="nav-wrapper amber darken-2">
      <a href="/" class="brand-logo hide-on-sm-and-down">Team Player</a>
      <ul id="nav-mobile" class="right">
        </ul>
        </div>
      </nav>
    </header>
    <body>
    <div class="flex-column justify-space-around">
    <main class="container container-fluid mt-5">
      ${makeTeam(team)}
    </main>
  </body>
  </html>
  `;
};
