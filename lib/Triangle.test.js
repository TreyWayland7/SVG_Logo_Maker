const Triangle = require('./Triangle.js');
const shapes = require('./shapes.js');


describe('Square', () => {

const triangle = new Triangle();


  describe('shapeClass', () => {
    it('should verify that Shape class on object.', () => {
      expect(triangle).toBeInstanceOf(shapes);
    })
  });

  describe('shapeClass', () => {
    it('should verify that Triangle class on object.', () => {
      expect(triangle).toBeInstanceOf(Triangle);
    })
  });
});
