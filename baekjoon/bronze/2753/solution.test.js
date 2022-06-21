const isLeap = require('./solution')

test('isLeap', () => {
  expect(isLeap(2000)).toBe(1);
  expect(isLeap(1999)).toBe(0);
})