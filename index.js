// required for application
const inquirer = require('inquirer');
const fs = require('fs');
// import inquirer from 'inquirer';
// import fs from 'fs';

// required for application
// import { Circle, Square, Triangle } from './library/shapes.js';// import overlay from './library/overlay.js';
const { Shapes, Circle, Square, Triangle } = require('./library/shapes.js')
const Overlay = require('./library/overlay.js');

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
        message: "Enter a text color for your logo(color keyword or hexadecimal).", //TEST ANSWER FOR CORRECT FORMAT
        name: "logoTextColor"
    },
    {
        type: "list",
        message: "What shape would you like for your logo?",
        choices: ['circle', 'square', 'triangle'],
        name: "logoShape"
    },
    {
        type: "input",
        message: "What is the color of the shape you chose?",
        name: "logoShapeColor"
    }
  ])
  .then((answers) => {
    console.log(answers)
    let newShape = null;
    let newOverlay = null;
    
    
    switch (answers.logoShape) {
        case 'circle':
            newShape = new Circle();
            break;
        case 'square':
            newShape = new Square();
            break;
        case 'triangle':  
            newShape = new Triangle();
            break;
        default: 
            console.error("No shape selected");
    }

    newShape.setColor(answers.logoShapeColor);
    console.log(newShape);

    if (answers) {
        newOverlay = new Overlay();
        newOverlay.setLogoText(answers.logoText);
        newOverlay.setLogoTextColor(answers.logoTextColor);
    }
    return {newShape, newOverlay};
  })

    .then(({newShape, newOverlay}) => {
        const newSvg = `
<svg width="300" height="200">${newShape.render()}${newOverlay.render()}</svg>
`;

        const newHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Image Display</title>
</head>

<body>
  <svg width="300" height="200">${newShape.render()}${newOverlay.render()}</svg>
</body>
</html>
`;
        
        fs.writeFile("logo.svg", newSvg, (err) => {
          if (err) {
            console.error("Error creating SVG file:", err);
          } else {
            console.log("Generated logo.svg!");
          }
        });

        fs.writeFile("logo.html", newHTML, (err) => {
          if (err) {
            console.error("Error creating html file:", err);
          } else {
            console.log("Open logo.html in your browser to view your logo!");
          }
        });
 })


  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something else went wrong:", error); // Print error using console.error
    }
  });
};

init();
