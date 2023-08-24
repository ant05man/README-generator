const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer
  .prompt([
    {
      type: 'input',
      message: "What is your project's name?",
      name: 'projectName',
    },
    // ... other questions ...
  ])
  .then((userResponses) => {
    // Call the function to generate README and write to file
    writeToFile('README.md', generateMarkdown(userResponses));
  });

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log(`Data written to ${fileName} successfully!`);
    }
  });
}
