const solution = require('./solution');

test('solution', () => {
  expect(solution(['5', '1 1', '12 34', '5 500', '40 60', '1000 1000'])).toBe('2\n46\n505\n100\n2000');
})