//  Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
// import inquirer from 'inquirer';
// import fs from 'fs';

//  Import classes
const { Shapes, Circle, Square, Triangle } = require('./library/shapes.js')
const Overlay = require('./library/overlay.js');

//<-----Start function----->
function init() {
  // Create prompts in inquirer format
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
        message: "Enter a text color for your logo(color keyword or hexadecimal(without #)).", //TEST ANSWER FOR CORRECT FORMAT
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
        message: "What is the color of the shape you chose(color keyword or hexadecimal(without #))?",
        name: "logoShapeColor"
    }
  ])

//<-----Process answers----->
  .then((answers) => {
    console.log(answers)
    let newShape = null;
    let newOverlay = null;
    const colorKeywords = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'black', 'white', 'gray'];

    //  Check logoText length
    if (answers.logoText.length > 3) {
        throw new Error("Logo text must be three characters or less.");
        return;
    }

    //  Check if text color is accepted type - hex or keyword
    if (!answers.logoTextColor.match(/^[0-9A-Fa-f]{6}$/) && !colorKeywords.includes(answers.logoTextColor.toLowerCase())) {
      throw new Error("Invalid text color. Please enter a valid hexadecimal color code.");
        return;
    }

    //  Check if shape color is accepted type
    if (!answers.logoShapeColor.match(/^[0-9A-Fa-f]{6}$/) && !colorKeywords.includes(answers.logoShapeColor.toLowerCase())) {
      throw new Error("Invalid shape color. Please enter a valid hexadecimal color code.");
        return;
    }
    
    //  Set newShape based on user selection
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

    //  Set newShape color
    newShape.setColor(answers.logoShapeColor);
    console.log(newShape);

    //  Set newOverlay
    if (answers) {
        newOverlay = new Overlay();
        newOverlay.setLogoText(answers.logoText);
        newOverlay.setLogoTextColor(answers.logoTextColor);
    }

    return {newShape, newOverlay};
  })

  //<-----Render new SVG----->
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
        
        fs.writeFile("./images/logo.svg", newSvg, (err) => {
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

//<-----Catch errors----->
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else if (error.message.startsWith("Logo text")) {
      console.error("Logo text must be less than three characters.");
    } else if (error.message.startsWith("Invalid text color")) {
        console.error("Invalid text color. Please enter a valid hexadecimal color code.");
    } else if (error.message.startsWith("Invalid shape color")) {
        console.error("Invalid shape color. Please enter a valid hexadecimal color code.");
    } else {
      console.error("Something else went wrong:", error); // Print error using console.error
    }
  });
};

init();
