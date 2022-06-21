const solution = require('./solution');

test('solution', () => {
  expect(solution(12, 5)).toBe(1);
  expect(solution(9,-13)).toBe(4);
})