const shapes = require('../library/shapes');


//  Test shapes
describe('Shapes', () => {
    //  Test circle
    test('render blue circle', () => {
        const circle = new shapes.Circle;
        circle.logoShapeColor = 'blue';
        expect(circle.render()).toBe(`<circle r="100" cx="150" cy="100" fill="blue"/>`);
    }),

    //  Test square 
    test('render red square', () => {
        const square = new shapes.Square();
        square.logoShapeColor = 'red';
        expect(square.render()).toBe(`<rect width="300" height="200" fill="red"/>`);
    }),
    //  Test triangle
    test('render green triangle', () => {
        const triangle = new shapes.Triangle();
        triangle.logoShapeColor = '#00FF00';
        expect(triangle.render()).toBe(`<polygon points="150,0 300,200 0,200" fill="#00FF00"/>`);
    })

});

