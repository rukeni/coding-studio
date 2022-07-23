const solution = require('./solution');

test('solution', () => {
  expect(solution([[1, 1], [2, 3], [3, 4], [9, 8], [5, 2]])).toEqual('2\n5\n7\n17\n7')
})