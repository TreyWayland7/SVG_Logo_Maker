const Shapes = require('./Shapes.js');

describe('Shape', () => {
  describe('shapeClass', () => {
    it('should verify that Shape class on object.', () => {
        const shape = new Shapes();
      expect(shape).toBeInstanceOf(Shapes);
    })
  });
});
