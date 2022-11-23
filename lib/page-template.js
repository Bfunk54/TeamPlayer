const makeTeam = team => {

    // create the manager html
    const makeManager = manager => {
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
    const makeEngineer = engineer => {
        return `

        `;
    };

    // create the html for interns
    const makeIntern = intern => {
        return `

        `;
    };

    // use the team array to generate pieces of html based on the employee role
}

module.exports = team => {
    // template literal - html body that calls the generate team function
}