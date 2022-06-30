const solution = require('./solution');

test('solution', () => {
  expect(solution(['OOXXOXXOOO', 'OOXXOOXXOO', 'OXOXOXOXOXOXOX', 'OOOOOOOOOO', 'OOOOXOOOOXOOOOX'])).toBe('10\n9\n7\n55\n30');
})