// TODO: Create an array of questions for user input
const questions = [
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
        choices: [
            'Apache',
            'GNU', 
            'MIT',
            'BSD2', 
            'BSD3', 
            'Boost', 
            'Creative Commons', 
            'Eclipse', 
            'GNU Affero', 
            'GNU General', 
            'GNU Lesser General', 
            'Mozzila', 
            'The Unlicense'
        ],
        message: 'Please choose a license from the list below that will be used to let other developers know what they are allowed to do with your project.',
    },
    {
        name: 'conributions',
        message: 'Please enter instructions on how other developers can contribute to your project.',
    },
    {
        name: 'tests',
        message: 'Please enter any testing information and/or protocols.',
    },
];

