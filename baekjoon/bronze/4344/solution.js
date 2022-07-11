function solution(answers) {
  let scores = '';

  for (let i = 0; i < answers.length; i++) {
    let count = 0;
    let sum = 0;
  
    for (let j = 0; j < answers[i].length; j++) {
      if (answers[i][j] === "O") {
        count++;
      } else {
        count = 0;
      }
      
      sum += count;
    }

    scores += (sum + '\n');
  }
  return scores.slice(0, scores.length -1);
}

module.exports = solution;