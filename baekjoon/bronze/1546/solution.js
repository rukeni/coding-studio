const getNewScore = (currentScore, maxScore) => {
  return (currentScore / maxScore) * 100;
}

function solution(numbers) {
  const max = Math.max(...numbers);
  const newScores = numbers.map(number => getNewScore(number, max));
  const totalScore = newScores.reduce((a, b) => a + b);

  return (totalScore / numbers.length);
}

module.exports = solution;