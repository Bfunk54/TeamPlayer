const makeTeam = team => {
    const body = document.querySelector('body');

    // create the manager html
    const makeManager = manager => {
        const managerDiv = document.createElement('div');
            managerDiv.classList.add('manager');
            managerDiv.innerHTML = `
        <div> 
        <h1>${manager.getName()}</h1>
        <h2> Manager </h2>
        <div class='col'>
        <div class='row'> <p> ID: ${manager.getId()}</p> </div>
        <div class='row'> <p> Email: ${manager.getEmail()}</p> </div>
        <div class='row'> <p> Office Number: ${manager.getOfficeNumber()}</p> </div>
        </div>
        `;
        body.appendChild(managerDiv);
    };

    // create the html for engineers
    const makeEngineer = engineer => {
        const engineerDiv = document.createElement('div');
            engineerDiv.classList.add('engineer');
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
        body.appendChild(engineerDiv);
    };

    // create the html for interns
    const makeIntern = intern => {
        const internDiv = document.createElement('div');
        internDiv.classList.add('intern');
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
        body.appendChild(internDiv);
        team.push(intern);
    };

    // use the team array to generate pieces of html based on the employee role
}

module.exports = team => {
    // template literal - html body that calls the generate team function
    return `
    <button class='new-team'> Create New Team </button>
    `;
}