// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "no license"){
    return `<img src = https://img.shields.io/badge/license-${license}-green.svg>`
  }
 return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "no license") {
    return ` - [License](#license) `
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if(license !== "no license") {
   return ` ## License
   
   This project is licensed under ${license}`
 }
 
 return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge (data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink (data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  

  ## Installation
  ${data.install}
 
 
  ## Usage
  ${data.usage}

  ${renderLicenseSection (data.license)}


  ## Contributing 
  ${data.contributor}
  
  
  ## Tests
  ${data.test}
 
 
 
  ## Questions
 
 
  If you have any questions about this project, you can contact me at ${
    data.emailAddress
  }. More projects available here https://github.com/${data.githubName}.

`;
}

module.exports = generateMarkdown;
