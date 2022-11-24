const makeTeam = (team) => {
  // create the manager html
  const makeManager = (manager) => {
    // return a template literal with a div for the manager
    return `
        <div> 
        <h2>${manager.getName()}</h2>
        <h5> Manager </h5>
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
        <h2>${engineer.getName()}</h2>
        <h5> Engineer </h5>
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
        <h2>${intern.getName()}</h2>
        <h5> Intern </h5>
        <div col>
        <div row> <p> ID: ${intern.getId()}</p> </div>
        <div row> <p> Email: ${intern.getEmail()}</p> </div>
        <div row> <p> School: ${intern.getSchool()}</p> </div>
        </div>
        `;
  };

  // use the team array to generate pieces of html based on the employee role
  const html = [];
  console.log(html);
  console.log(team);

  // loop through the team array
  for (let i = 0; i < team.length; i++) {
    console.log(team[i].getRole());
    //Switch statement to determine which type of employee is being added
    switch (true) {
      case team[i].getRole() === "Manager":
        console.log("Manager is happening");
        console.log(makeManager(team[i]));
        html.push(makeManager(team[i]));
        break;
      case team[i].getRole() === "Engineer":
        console.log("Engineer is happening");
        console.log(makeEngineer(team[i]));
        html.push(makeEngineer(team[i]));
        break;
      case team[i].getRole() === "Intern":
        html.push(makeIntern(team[i]));
        break;
    }
  }
  return html;
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