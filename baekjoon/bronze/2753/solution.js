function isLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function solution(year) {
  return isLeap(year) ? 1 : 0;
}

module.exports = solution;