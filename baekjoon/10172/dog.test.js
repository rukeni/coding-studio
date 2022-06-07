const dog = require('./dog');

describe('dog', () => {
  it('returns dog', () => {
    expect(dog()).toBe(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|`);
  });
})