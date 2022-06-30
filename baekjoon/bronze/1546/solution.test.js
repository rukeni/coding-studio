const solution = require('./solution');

test('solution', () => {
  expect(solution([40, 80, 60])).toBe(75.0);
  expect(solution([10, 20, 30])).toBe(66.666667);
})