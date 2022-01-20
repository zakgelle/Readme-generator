// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  

  ## Installation
  ${data.install}
 
 
  ## Usage
  ${data.usage}

  ## Contributing 
  ${data.contributors}
  
  
  ## Tests
  ${data.test}
 
 
 
  ## Questions
 
 
  If you have any questions about this project, you can contact me at ${
    data.email
  }. More projects available here https://github.com/${data.github}.

`;
}

module.exports = generateMarkdown;
