// required for application
const inquirer = require('inquirer');
const fs = require('fs');
// import inquirer from 'inquirer';
// import fs from 'fs';

// required for application
// import { Circle, Square, Triangle } from './library/shapes.js';// import overlay from './library/overlay.js';
const shapes = require('./library/shapes.js');
const overlay = require('./library/overlay.js');

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

    logoShapeColor = answers.logoShapeColor;
    logoTextColor = answers.logoTextColor;
    logoText = answers.logoText;
    logoShape = answers.logoShape;
    let newShape = "";

    if (logoShape === "circle") {
        newShape = new Circle();
        newShape.logoShapeColor = logoShapeColor;
        console.log(newShape.render());
    } else if (logoShape === "square") {
        newShape = new Square();
        newShape.logoShapeColor = logoShapeColor;
        console.log(newShape.render());
    } else if (logoShape === "triangle") {
        newShape = new Triangle();
        newShape.logoShapeColor = logoShapeColor;
        console.log(newShape.render());
    }

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

init();
