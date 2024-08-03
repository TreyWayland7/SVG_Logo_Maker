const shapes = require('./shapes.js');

describe('Shape', () => {
  describe('shapeClass', () => {
    it('should verify that Shape class on object.', () => {
        const shape = new shapes();
      expect(shape).toBeInstanceOf(shapes);
    })
  });
});
