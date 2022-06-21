const solution = require('./solution');

test('solution', () => {
  expect(solution(14, 30, 20)).toBe('14 50');
  expect(solution(17, 40, 80)).toBe('19 0');
  expect(solution(23, 48, 25)).toBe('0 13');
})