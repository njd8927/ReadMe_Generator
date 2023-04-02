// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
function userInputs(){
    inquirer.prompt([
    {
        name: 'title',
        message: 'What would you like the title of your README to be?',
    },
    {
        name: 'description',
        message: 'Please enter a description of your project.',
    },
    {
        name: 'table of contents',
        message: 'Please enter a table of contents to make it easy for the user to find what they need.',
    },
    {
        name: 'installation',
        message: 'Please enter the steps required for a user to install your project.',
    },
    {
        name: 'usage',
        message: 'Please provide instructions for usage of your project including screenshots.'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please choose a license from the list below that will be used to let other developers know what they are allowed to do with your project.',
        choices: [
            'Apache',
            'GNU', 
            'MIT',
            'BSD2', 
            'BSD3', 
        ],
       
    },
    {
        name: 'conributions',
        message: 'Please enter instructions on how other developers can contribute to your project.',
    },
    {
        name: 'tests',
        message: 'Please enter any testing information and/or protocols.',
    },
    {
        name: 'github',
        message: 'What is your GitHub user name?'
    },
    {
        name: 'email',
        message: 'What is your email address?'
    },
]).then((answersObj) => {
    console.log(answersObj);

})};


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 

}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
userInputs();
