const sameFrequency = require('./sameFrequency');

test('sameFrequency', () => {
  expect(sameFrequency(182, 281)).toBe(true);
  expect(sameFrequency(34, 14)).toBe(false);
  expect(sameFrequency(3589578, 5879385)).toBe(true);
  expect(sameFrequency(22, 222)).toBe(false);
});