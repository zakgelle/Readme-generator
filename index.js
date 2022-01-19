// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project",
    },

    {
        type: "input",
        name: "description",
        message: "Add a description for your project",
      },
      {
          type: "input",
          name: "licence",
          message: "What license are you using for your project",
      },
      {
        type: "input",
        name: "githubName",
        message: "What is your Github username?",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?",
      },
      {
          type: "input",
          name: "install",
          message: "What steps are required to install this project",
      },
      {
          type: "input",
          name: "usage",
          message: "What is this project going to be used for",
      },
      {

      }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userResponses)=>{
        console.log(userResponses)
        writeToFile("Output/README.md", generateMarkdown({...userResponses}))
    })
}

// Function call to initialize app
init();
