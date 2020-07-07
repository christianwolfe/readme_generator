const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user


const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"

    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Provide brief instruction on installation."
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list those already contributing, or, explain how users can contribute to this project."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide a brief test example."
    },
    {
        type: "input",
        name: "license",
        message: "What is this product licensed under?"
    },
    {
        type: "input",
        name: "projectQuestions",
        message: "Where may contributors or users direct questions regarding this project?"
    }
];

// pass questions array into prompt
inquirer.prompt(questions)

    // function to initialize generateMarkdown
    .then(function (data) {
        const createMarkdown = generateMarkdown(data);
        fs.writeFile("README.md", createMarkdown, function (err) {
            if (err) {
                throw err;
            }
            console.log("README.md successfully generated.")
        });

    });