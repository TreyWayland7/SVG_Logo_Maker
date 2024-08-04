const fs = require("fs");
const inquirer = require("inquirer");
const Square = require("./lib/Square");
const Triangle = require("./lib/Triangle");
const Circle = require("./lib/Circle");


const promptArray = [
    {
        type: 'input',
        message: 'Enter Logo Text. Max 3 Char.',
        name: 'logoText'
    },
    {
        type: 'input',
        message: 'Enter color Keyword or hexadecimal number.',
        name: 'logoColor'
    },
    {
        type: "list",
        message: "Choose a Shape:",
        name: "logoShape",
        choices: ["circle", "triangle", "square"]
    }
];

inquirer
  .prompt(promptArray)
  .then((response) => generateSVGLogoFile(response));


function generateSVGLogoFile(response){
        console.log(response)
        const shapeObject = generateShapeObject(response);
        const dataToWrite = shapeObject.render();

        fs.writeFile("logo.svg", dataToWrite, (err)=>{
            if (err)
                console.log(err);
              else {
                console.log("Generated logo.svg\n");
              }
        });
        

}

function generateShapeObject(userResponse){
    console.log(userResponse);
    switch(userResponse.logoShape){
        case "circle":
            const circleObj = new Circle(userResponse.logoText, userResponse.logoColor);
            return circleObj;
        case "triangle":
            console.log("here");
            const trianlgeObj = new Triangle(userResponse.logoText, userResponse.logoColor);
            return trianlgeObj;
        case "square":
            const squareObj = new Square(userResponse.logoText, userResponse.logoColor);
            return squareObj;

    }
}



