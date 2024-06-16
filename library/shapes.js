class Shapes {
    constructor() {
        this.logoShapeColor = 'color';
    }
    render() {
    }   
};

class Circle extends Shapes {
    constructor() {
        super();
    }
    render() {
        return `<circle r="45" cx="50" cy="50" fill="${this.logoShapeColor}"/>`;
    }
};
class Square extends Shapes {
    constructor() {
        super();
    }
    render() {
        return  `<rect width="100" height="100" fill="${this.logoShapeColor}"/>`;
    }
}

class Triangle extends Shapes {
    constructor() {
        super();
    }
    render() {
        return `<polygon points="50,0 100,100 0,100" fill="${this.logoShapeColor}"/>`;
    }
}


module.exports = {Shapes, Circle, Square, Triangle};

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