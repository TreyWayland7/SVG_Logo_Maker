const Square = require('./Square.js');
const Shapes = require('./Shapes.js');


describe('Square', () => {

const square = new Square("123", "green", "white");


  describe('shapeClass', () => {
    it('should verify that Shape class on object.', () => {
      expect(square).toBeInstanceOf(Shapes);
    })
  });

  describe('squareClass', () => {
    it('should verify that Square class on object.', () => {
      expect(square).toBeInstanceOf(Square);
    })
  });

  describe('squareRender', () => {
    it('should verify that Triangle class on object.', () => {
      expect(square.render()).toEqual(expect.stringContaining(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`));
    })
  });
});
