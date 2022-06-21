const uniqueNumbersSize = (numbers) => {
  return new Set(numbers).size;
}

const getSameNumber = (numbers) => {
  if(numbers[0] === numbers[1]) {
    return numbers[0];
  }
  if(numbers[0] === numbers[2]) {
    return numbers[0];
  }
  return numbers[1];
}

function solution(numbers) {
  const reward = {
    1: 10000 + numbers[0] * 1000,
    2: 1000 + getSameNumber(numbers) * 100,
    3: 0 + Math.max(...numbers) * 100,
  };

  const uniqueSize = uniqueNumbersSize(numbers);

  return reward[uniqueSize];
}

module.exports = solution;