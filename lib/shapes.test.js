const shapes = require('./shapes.js');

describe('Shape', () => {
  describe('shapeClass', () => {
    it('should verify that Shape class on object.', () => {
        const shape = new shapes();
      expect(shape).toBeInstanceOf(shapes);
    })
  });
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
});
