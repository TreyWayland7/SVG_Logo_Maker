const Triangle = require('./Triangle.js');
const Shapes = require('./Shapes.js');


describe('Square', () => {

const triangle = new Triangle("123", "green", "white");


  describe('shapeClass', () => {
    it('should verify that Shape class on object.', () => {
      expect(triangle).toBeInstanceOf(Shapes);
    })
  });

  describe('triangleClass', () => {
    it('should verify that Triangle class on object.', () => {
      expect(triangle).toBeInstanceOf(Triangle);
    })
  });

  describe('triangleRender', () => {
    it('should verify that Triangle class on object.', () => {
      expect(triangle.render()).toEqual(expect.stringContaining(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`));
    })
  });
});
