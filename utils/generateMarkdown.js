// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  const badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    Mozilla:
      '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    Apache:
      '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  };
  if (license != 'none') {
    return badges[license];
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license != 'none') {
    return `- [License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license != 'none') {
    return `## License
  ${license}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `

# <h1 align="center"> ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Contributions](#contributions)
- [Contact](#contact)
${renderLicenseLink(data.license)}

## Description
${data.description}

## Installation 
Packages required: ${data.installation}

## Contributions
${data.contributions}

## Contact
Email: ${data.email} <br/>
Github: [${data.github}](https://github.com/${data.github})

${renderLicenseSection(data.license)}

## <h2 align="center"> :octocat: README created with [Pro-Readme-Generator](https://github.com/Kpfranklin22/pro-readme-generator) :octocat:
`;
}

module.exports = generateMarkdown;

//  ${data.github}
