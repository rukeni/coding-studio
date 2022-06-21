const convertYear = require( './convertYear' );

describe('convertYear', () => {
  it('returns convertYear', () => {
    expect(convertYear(2541)).toBe(1998);
  });
});