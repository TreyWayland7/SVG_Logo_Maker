const Shapes = require('./Shapes.js');


class Square extends Shapes{
    constructor(text, color) {
        super(text, color);
    }
    renderShapeXML(text, color){
        const circleXML = `<square cx="150" cy="100" r="80" fill="${color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>`;
        return circleXML;
 
    }

    render(){
        
    }
}

module.exports = Square;