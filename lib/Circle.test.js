const circle = require('./Circle.js');
const shapes = require('./shapes.js');


describe('Circle', () => {

const circleObj = new circle();


  describe('shapeClass', () => {
    it('should verify that Shape class on object.', () => {
      expect(circleObj).toBeInstanceOf(shapes);
    })
  });

  describe('shapeClass', () => {
    it('should verify that circle class on object.', () => {
      expect(circleObj).toBeInstanceOf(circle);
    })
  });
});
