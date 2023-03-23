// Packages needed for this application

const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Array of questions for user input

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a brief project description.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What packages need to be installed to run this application?',
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Who made contributions to this project?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is a good email address to reach you?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username? (Case-sensitive)',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a License:',
    choices: ['MIT', 'ISC', 'Mozilla', 'Apache', 'None'],
  },
];

// Function to write README file to file system

function writeToFile(fileName, data) {
  fs.writeFile(fileName, markdown(data), (err, data) => {
    console.log('README.md created! Check /dist folder');
  });
}

// Function to initialize app

async function init() {
  const readme = await inquirer.prompt(questions);
  writeToFile('./dist/README.md', readme);
  console.log(readme);
}

// Function call to initialize app

init();
