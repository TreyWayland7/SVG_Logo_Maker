const Triangle = require('./Triangle.js');
const Shapes = require('./Shapes.js');


describe('Square', () => {

const triangle = new Triangle();


  describe('shapeClass', () => {
    it('should verify that Shape class on object.', () => {
      expect(triangle).toBeInstanceOf(Shapes);
    })
  });

  describe('shapeClass', () => {
    it('should verify that Triangle class on object.', () => {
      expect(triangle).toBeInstanceOf(Triangle);
    })
  });
});
