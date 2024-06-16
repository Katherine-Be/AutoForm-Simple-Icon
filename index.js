// required for application
var inquirer = require('inquirer');
var fs = require('fs');
const { type } = require('os');


function init() {
  // create prompts in inquirer format
  inquirer.prompt([
      // prompt format:
      // {
      // allowed user input type,
      // question/prompt displayed in console for user, 
      // object name to reference user's answer
      // choices (if applicable),
      // },
    {
        type: "input",
        message: "What letters would you like in your logo?",
        name: "logoText" // NEED TO LIMIT TO THREE CHARACTERS
    },
    {
        type: "input",
        message: "Entera text color for your logo(color keyword or hexadecimal).", //TEST ANSWER FOR CORRECT FORMAT
        name: "logoTextColor"
    },
    {
        type: "checkbox",
        message: "What shape would you like for your logo?",
        choices: ["circle", "square", "triangle"],
        name: "logoShape"
    },
    {
        type: "input",
        message: "What is the color of the shape you chose?",
        name: "logoShapeColor"
    }
  ])
  .then((answers) => {
    fs.writeFile("logo.svg", JSON.stringify(answers), (err) => {
      if (err) throw err;
      console.log("Your logo has been created!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
};
