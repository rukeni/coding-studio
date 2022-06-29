const { solution } = require('./solution');

test('solution', () => {
  expect(solution('aabbaccc')).toEqual(7);
  expect(solution('ababcdcdababcdcd')).toEqual(9);
  expect(solution('abcabcdede')).toEqual(8);
  expect(solution('abcabcabcabcdededededede')).toEqual(14);
  expect(solution('xababcdcdababcdcd')).toEqual(17);
})
