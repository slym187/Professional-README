// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    }, {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
    ];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README file has been successfully created!');
        }
    });
    }


// TODO: Create a function to initialize app
function init() {
    inquirer
    .createPromptModule(questions)
    .then((answers) => {
        const readmeContent = `
        # ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Questions
For questions or concerns about this project, please contact [${answers.username}](https://github.com/${answers.username}) via email at ${answers.email}.
`;
        console.log(readmeContent);
    })
    .catch((error) => {
        console.error('Error occured:', error);
    });
}

// Function call to initialize app
init();
