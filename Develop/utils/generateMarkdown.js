// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    Mozilla:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    Apache:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  };
  if (license != "none") {
    return badges[license];
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "none") {
    return `
  - [License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none") {
    return `
  ## License
  ${license}`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  console.log(data);

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Table of Contents
  - [Project Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}

## Description
  ${data.description}

## Installation 
  The following dependencies must be installed to run the application: ${
    data.installation
  }

## Usage
${data.usage}

## Contributions
Contributors: ${data.contributions}

## Tests
To run tests, run the following command(s): ${data.tests}

## Questions
If you have any questions about the repository, you can contact me by Email: ${
    data.email
  } or Github: ${data.github}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
