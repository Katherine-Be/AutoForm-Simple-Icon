class Shapes {
    constructor(color) {
        this.logoShapeColor = color;
    }
    setColor(color) {
        this.logoShapeColor = color;
    }
    render() {
    }

}

class Circle extends Shapes {
    constructor() {
        super();
    }
    render() {
        return `<circle r="100" cx="150" cy="100" fill="${this.logoShapeColor}"/>`;
    }
}

class Square extends Shapes {
    constructor() {
        super();
    }
    render() {
        return `<rect width="300" height="200" fill="${this.logoShapeColor}"/>`;
    }
}

class Triangle extends Shapes {
    constructor() {
        super();
    }
    render() {
        return `<polygon points="150,0 300,200 0,200" fill="${this.logoShapeColor}"/>`;
    }
}

module.exports = { Shapes, Circle, Square, Triangle };


// // create a method to set the color of the shape
// setColor(color) {
//     this.color = color;
// }
// // create a method to set the shape
// setShape(shape) {
//     this.shape = shape;
// }
// // create a method to set the text
// setText(text) {
//     this.text = text;
// }
// // create a method to set the text color
// setTextColor(textColor) {
//     this.textColor = textColor;
// }