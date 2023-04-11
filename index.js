
// Pulls in file system package
const fs = require('fs');

// Pulls in inquirer package for user prompts
const inquirer = require('inquirer');

// Pulls in data from generateMarkdown file
const markdown = require('./utils/generateMarkdown.js');


// Function to generate user promopts and obtain the data needed for the README
function userInputs(){
    // inquirer with the prompt method to generate the questions in the terminal
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
        name: 'contents',
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
            'Mozilla',
        ], 
    },
    {
        name: 'contributions',
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
    const data = markdown(answersObj)
    writeToFile('README.md', data);
    // log user answers and create a const that connects the answers to the generate markdown function 
    // call the writeToFile function and create a new README.md file 

})};



// function to create new file and log if there was an error or if file was created successfully

function writeToFile(fileName, data) { 
    fs.writeFile(fileName,data,err => {
        if (err)
        return console.log(err);
        
        console.log('Your file has been created successfully!');
    });

};


// function to initialize app

function init() {
    console.log('Welcome');
    userInputs();
};

// function call to initialize app

init();

