const shapes = require('../library/shapes');


// Write your test cases
describe('Shapes', () => {
    // Test case 1
    test('render blue circle', () => {
        const circle = new shapes.Circle;
        circle.color = 'blue';
        expect(circle.render()).toBe(`<circle r="45" cx="50" cy="50" fill="blue"/>`);
    }),

    // Test case 2
    test('render red square', () => {
        const square = new shapes.Square();
        square.color = 'red';
        expect(square.render()).toBe(`<rect width="100" height="100" fill="red"/>`);
    }),
    
    test('render hexadecimally green triangle', () => {
        const triangle = new shapes.Triangle();
        triangle.color = '#00FF00';
        expect(triangle.render()).toBe(`<polygon points="50,0 100,100 0,100" fill="#00FF00"/>`);
    })

});