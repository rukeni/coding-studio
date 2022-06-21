const solution = require('./solution');

test('solution', () => {
  expect(solution([3, 3, 6])).toBe(1300);
  expect(solution([2, 2, 2])).toBe(12000);
  expect(solution([6, 2, 5])).toBe(600);
})