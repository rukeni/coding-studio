const { calculateLeftDays, countCompletedDeployments, solution, getReference } = require('./solution');

test('calculateLeftDays', () => {
  expect(calculateLeftDays([93, 30, 55], [1, 30, 5])).toEqual([7, 3, 9]);
  expect(calculateLeftDays([95,90,99,99,80,99], [1, 1, 1, 1, 1, 1])).toEqual([5, 10, 1, 1, 20, 1]);
});

test('countCompletedDeployments', () => {
  expect(countCompletedDeployments([7, 3, 9])).toEqual([2, 1]);
});

test('solution', () => {
  expect(solution([93,30,55], [1, 30, 5])).toEqual([2, 1]);
  expect(solution([95,90,99,99,80,99], [1, 1, 1, 1, 1, 1])).toEqual([1, 3, 2])
})

test('getReference', () => {
  expect(getReference(2, 3)).toBe(3);
  expect(getReference(5, 1)).toBe(5);
})