const inquirer = require("inquirer")

function init() {
inquirer
    .prompt([
        {
            name: "title",
            type: "input",
            message: "What is the title of your project?"
        },
        {
            name: "description",
            type: "input",
            message: "Description (leave empty for none):"

        },
        {
            name: "installation",
            type: "input",
            message: "Installation instructions:"
        },
        {
            name: "usage",
            type: "input",
            message: "Usage information:"
        },
        {
            name: "contribution",
            type: "input",
            message: "Contribution guidelines:"
        },
        {
            name: "test",
            type: "input",
            message: "Test instructions:"
        },
        {
            name: "license",
            type: "list",
            message: "License:",
            choices: ["None",
                      "Apache License 2.0",
                      "GNU General Public License v3.0",
                      "MIT License",
                      "BSD 2-Clause \"Simplified\" License",
                      "BSD 3-Cluase \"New\" or \"Revised\" License",
                      "Boost Software License 1.0",
                      "Creative Commons Zero v1.0 Universal",
                      "Eclipse Public License v3.0",
                      "GNU Affero General Public License v3.0",
                      "GNU General Public License v2.0",
                      "GNU Lesser General Public License v2.1",
                      "Mozilla Public License 2.0",
                      "The Unlicense"]
          },
          {
            name: "username",
            type: "input",
            message: "GitHub username:"
          },
          {
            name: "email",
            type: "input",
            message: "Your email address:"
          },
    ])
    .then((answer) => {
        console.log("Hello " + answer.title, answer.contribution)
        console.log(answer.license)
    })
}
init()