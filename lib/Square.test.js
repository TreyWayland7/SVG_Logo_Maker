const Square = require('./Square.js');
const shapes = require('./shapes.js');


describe('Square', () => {

const square = new Square();


  describe('shapeClass', () => {
    it('should verify that Shape class on object.', () => {
      expect(square).toBeInstanceOf(shapes);
    })
  });

  describe('shapeClass', () => {
    it('should verify that Square class on object.', () => {
      expect(square).toBeInstanceOf(Square);
    })
  });
});
