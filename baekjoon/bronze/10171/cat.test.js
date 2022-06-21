const cat = require('./cat');

describe('cat', () => {
  it('returns cat', () => {
    expect(cat()).toBe(`\\    /\\
 )  ( ')
(  /  )
 \\(__)|`);
  });
})