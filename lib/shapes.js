class Shapes {
    constructor(text, color) {
        this.text = text;
        this.color = color;

    }
    greet() {
        console.log(`Hello from `);
    }


    renderStarterXML(){
        return "<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">"
    }

    renderEndingXML(){
        return "</svg>"
    }
}

module.exports = Shapes;