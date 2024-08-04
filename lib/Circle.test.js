const circle = require('./Circle.js');
const Shapes = require('./Shapes.js');


describe('Circle', () => {

const circleObj = new circle();


  describe('shapeClass', () => {
    it('should verify that Shape class on object.', () => {
      expect(circleObj).toBeInstanceOf(Shapes);
    })
  });

  describe('shapeClass', () => {
    it('should verify that circle class on object.', () => {
      expect(circleObj).toBeInstanceOf(circle);
    })
  });
});
