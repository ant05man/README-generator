// generateMarkdown.js

function renderLicenseBadge(license) {
  const licenseBadges = {
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg'
    // Add more license badges as needed
  };

  const badgeURL = licenseBadges[license] || '';
  return badgeURL ? `![License](${badgeURL})` : '';
}

function renderLicenseLink(license) {
  const licenseLinks = {
    'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'MIT License': 'https://opensource.org/licenses/MIT',
    'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt'
    // Add more license links as needed
  };

  return licenseLinks[license] || '';
}

function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);

  if (licenseLink) {
    return `This project is licensed under the [${license}](${licenseLink}) license.`;
  } else {
    return '';
  }
}

function generateMarkdown(userResponses) {
  const licenseBadge = renderLicenseBadge(userResponses.license);
  const licenseSection = renderLicenseSection(userResponses.license);

  return `
  ${licenseBadge} 

# Table of Contents: 
- [Description](#description)
- [Installation](#installation)
- [Tests](#tests)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)


  # Project Name: ${userResponses.projectName}
  ## Description: <a id='description'></a>${userResponses.description}
  ## Installation: <a id='installation'></a>${userResponses.installation}
  ## Tests: <a id='tests'></a>${userResponses.tests}
  ## Usage: <a id='usage'></a>${userResponses.usage}
  ## License: <a id='license'></a>${licenseSection} 
  ## Contributing: <a id='contributing'></a>${userResponses.contributing}
  ## Questions? My email is: <a id='questions'></a>${userResponses.email} and My GitHub website is: <a id='github'></a>$${userResponses.github}

`;
}

module.exports = generateMarkdown;
