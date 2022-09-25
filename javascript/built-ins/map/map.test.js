const map = require('./map');

describe('map', () => {
  it('returns map an array', () => {
    const array = [1, 2, 3];

    const result = map(array, (item) => item * 2);
    
    expect(result).toEqual([2, 4, 6]);
  });
})