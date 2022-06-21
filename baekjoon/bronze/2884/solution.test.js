const solution = require('./solution');

test('solution', () => {
  expect(solution(10, 10)).toBe('9 25');
  expect(solution(0, 30)).toBe('23 45');
  expect(solution(0, 0)).toBe('23 15');
  expect(solution(0, 45)).toBe('0 0');
  expect(solution(23, 40)).toBe('22 55');
})