const Shapes = require('./Shapes.js');


class Triangle extends Shapes{
    constructor(text, color) {
        super(text, color);
    }

    renderShapeXML(){
        const circleXML = `<polygon points="250,60 100,400 400,400" fill="${this.color}" />
        <text x="250" y="250" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`;
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
        //console.log(returnedXMLString)
    }
    
}

module.exports = Triangle;