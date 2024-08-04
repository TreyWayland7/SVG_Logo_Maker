const Square = require('./Square.js');
const Shapes = require('./Shapes.js');


describe('Square', () => {

const square = new Square();


  describe('shapeClass', () => {
    it('should verify that Shape class on object.', () => {
      expect(square).toBeInstanceOf(Shapes);
    })
  });

  describe('shapeClass', () => {
    it('should verify that Square class on object.', () => {
      expect(square).toBeInstanceOf(Square);
    })
  });
});
