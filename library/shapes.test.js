const shapes = require('../library/shapes');


// Write your test cases
describe('Shapes', () => {
    // Test case 1
    test('render blue circle', () => {
        const circle = new shapes.Circle;
        circle.logoShapeColor = 'blue';
        expect(circle.render()).toBe(`<circle r="100" cx="150" cy="100" fill="blue"/>`);
    }),

    // Test case 2
    test('render red square', () => {
        const square = new shapes.Square();
        square.logoShapeColor = 'red';
        expect(square.render()).toBe(`<rect width="300" height="200" fill="red"/>`);
    }),
    
    test('render hexadecimally green triangle', () => {
        const triangle = new shapes.Triangle();
        triangle.logoShapeColor = '#00FF00';
        expect(triangle.render()).toBe(`<polygon points="150,0 300,200 0,200" fill="#00FF00"/>`);
    })

});

