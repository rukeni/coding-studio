const surprise = require('./surprise');

describe('surprise', () => {
  it('returns id plus ??!', () => {
    expect(surprise('joo')).toBe('joo??!');
  })
});