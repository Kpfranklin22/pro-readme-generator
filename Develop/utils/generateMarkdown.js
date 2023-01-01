// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  console.log(data);

  return `# ${data.title}

  ## Table of Contents
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
  ${data.description}

  ## Usage
  This application is used for: ${data.usage}

  ## Contributions
  Contributors: ${data.contributions}

  ## Tests
  To run tests, run the following command(s): ${data.tests}

  ## Questions
  If you have any questions about the repository, you can contact me here:
  Email: ${data.email}
  Github: ${data.github}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
