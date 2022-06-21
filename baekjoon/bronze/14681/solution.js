function solution(x, y) {
  const evaluate = (value) => {
    if(value > 0) return '+';
    return '-';
  }

  const quadrant = {
    '++': 1,
    '-+': 2,
    '--': 3,
    '+-': 4
  }

  const quadrantValue = evaluate(x) + evaluate(y);

  return quadrant[quadrantValue];
}

module.exports = solution;