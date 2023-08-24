const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: "What is your project's name?",
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What kind of license should your project have?',
      name: 'license',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies',
      },
      {
        type: 'input',
        message: 'What command should run to run tests?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution',
      },
  ])