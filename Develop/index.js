// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
inquirer
  .prompt([
  {
  type: 'input',
  message: "What is your project's name?",
  name: 'projectName',
  },
  {
    type: 'input',
  message: "Please write a short description of your project",
  name: 'description',
  },
  {
    type: 'input',
  message: "What kind of license should your project have?",
  name: 'license',
  },
  {
    type: 'input',
  message: "What command should be run to install dependencies?",
  name: 'dependencies',
  },
  {
    type: 'input',
  message: "What command should be run to run tests?",
  name: 'tests'
  },
  {
    type: 'input',
  message: "What does the user need to know about using the repo?",
  name: 'usage',
  },
  {
    type:'input',
  message: "What does the user need to know about contributing to the repo?",
  name:'contribution'
  }
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



