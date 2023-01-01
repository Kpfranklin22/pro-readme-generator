// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Project description?",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation- Depenencies?",
  },
  {
    type: "input",
    name: "usage",
    message: "Project usage information?",
  },
  {
    type: "input",
    name: "contributions",
    message: "Contribution information?",
  },
  {
    type: "input",
    name: "tests",
    message: "Test instructions?",
  },
  {
    type: "input",
    name: "email",
    message: "For questions about your repo; email address?",
  },
  {
    type: "input",
    name: "github",
    message: "For questions about your repo; github link?",
  },
  {
    type: "list",
    name: "license",
    message: "License?",
    choices: ["MIT", "ISC", "Mozilla", "Apache", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, markdown(data), (err, data) => {
    console.log("ReadMe created!");
  });
}

// TODO: Create a function to initialize app
async function init() {
  const readme = await inquirer.prompt(questions);
  writeToFile("Demo-README.md", readme);
  console.log(readme);
}

// Function call to initialize app
init();
