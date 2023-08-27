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
  # Project Name: ${userResponses.projectName}
  ## Description: ${userResponses.description}
  ## Installation: ${userResponses.installation}
  ## Tests: ${userResponses.tests}
  ## Usage: ${userResponses.usage}
  ${licenseBadge}  // Add license badge here
  ${licenseSection} // Add license section here
  ## Contributing: ${userResponses.contributing}

  ...

`;
}

module.exports = generateMarkdown;
