const multiply = require('./multiply')

describe('multiply', () => {
  it('returns multiply', () => {
    expect(multiply('472', '385'[2])).toBe(2360);
    expect(multiply('472', '385'[1])).toBe(3776);
    expect(multiply('472', '385'[0])).toBe(1416);
    expect(multiply('472', '385')).toBe(181720);
  });
})