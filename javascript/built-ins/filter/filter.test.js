const filter = require('./filter');

describe('filter', () => {
  it('returns filtered array', () => {

    const array = [1, 2, 3];

    const result = filter(array, (item) => item % 2 === 0);
    
    expect(result).toEqual([2]);
  })
})