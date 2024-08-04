const Shapes = require('./Shapes.js');


class Square extends Shapes{
    constructor(text, color) {
        super(text, color);
    }
    renderShapeXML(text, color){
        const circleXML = `<rect width="300" height="200"  fill="${this.color}" />
        <text x="150" y="100" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`;
        return circleXML;
 
    }

    callRenderStartingXML(){
        return super.renderStarterXML();
    }

    callRenderEndingXML(){
        return super.renderEndingXML();
    }


    render(){
        const startingXML = this.callRenderStartingXML()
        const middleXML = this.renderShapeXML()
        const endingXML = this.callRenderEndingXML()

        const returnedXMLString = `
        ${startingXML}
        ${middleXML}
        ${endingXML}
        `;
        return returnedXMLString;
    }
}

module.exports = Square;