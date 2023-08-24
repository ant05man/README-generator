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
  },
  {
    type: 'input',
  message: "What command should be run to install dependencies?",
  },
  {
    type: 'input',
  message: "What command should be run to run tests?",
  },
  {
    type: 'input',
  message: "What does the user need to know about using the repo?",
  },
  {
    type:'input',
  message: "What does the user need to know about contributing to the repo?"
  }
]);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();