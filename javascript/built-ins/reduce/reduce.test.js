const reduce = require('./reduce');

describe('reduce', () => {
  it('returns reduce', () => {
    const arr = [1, 2, 3, 4, 5];

    const sum = reduce(arr, (a, b) => a + b, 0);

    expect(sum).toBe(15);
  })
})