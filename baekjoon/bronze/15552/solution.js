function solution(input) {
  let string = '';

  input.shift();
  
  const sum = (a, b, index) => (Number(a) + Number(b)) + (index < input.length - 1 && '\n');
  
  for(let i = 0; i < input.length; i++) {
      string += sum(input[i].split(' ')[0], input[i].split(' ')[1], i);
  }

  return string;
}

module.exports = solution;