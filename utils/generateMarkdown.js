// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Mozilla') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache') {
    return `### License
This project is licensed under the Apache License`;
  } else if (license === 'GNU'){
    return `### License
This project is licensed under the GNU License`;
  } else if (license === 'MIT'){
    return `### License
This project is licensed under the MIT License`;
  } else if (license === 'Mozilla') {
    return `### License
This project is licensed under the Mozilla License`;
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title};
  ## ${data.description};
  ## ${data.contents};
  ## ${data.installation};
  ## ${data.usage};
  ${renderLicenseSection(data.license)};
  ### ${data.contributions};
  ### ${data.tests};
  ### Questions;
  GitHub Repo: ${data.github};
  Email: ${data.email};
`;
};

module.exports = generateMarkdown;
