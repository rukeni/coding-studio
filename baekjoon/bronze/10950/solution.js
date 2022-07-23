function solution(numbers) {
  const sum = (a, b) => a + b;

  return numbers.map((lines) => sum(lines[0], lines[1])).join('\n')
}

module.exports = solution;