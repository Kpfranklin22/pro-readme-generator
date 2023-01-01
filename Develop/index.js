// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
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
    message: "Installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "Project usage information?",
  },
  {
    type: "input",
    name: "contribution",
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
    message: "For questions(email)?",
  },
  {
    type: "input",
    name: "github",
    message: "For questions(github)?",
  },
  {
    type: "list",
    name: "license",
    message: "License?",
    choices: ["MIT", "ISC", "Mozilla Public License 2.0", "Apache License 2.0"],
    filter(value) {
      return value.toLowerCase();
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then((data) => {
      const mark = markdown.generateMarkdown(data);
      console.log(mark);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
