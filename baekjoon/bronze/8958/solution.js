const changeToGrade = answers => {
  let grade = 1;
  const grades = [];

  for(let i = 0; i < answers.length; i++) {
    if(answers[i] === 'O') {
      grades.push(grade);
      grade++;
    } else {
      grade = 1;
    }
  }

  return grades;
}

const convertAnswers = answers => {
  return answers.map(answer => answer.split(''));
}

const getTotalScore = answer => {
  const grades = changeToGrade(answer);

  return grades.reduce((a, b) => a + b);
}

function solution(answers) {
  let scores = '';
  const splittedAnswers = convertAnswers(answers);

  for(let i = 0; i < splittedAnswers.length; i++) {
    const answer = splittedAnswers[i];
    const totalScore = getTotalScore(answer);

    scores += (totalScore + (i !== splittedAnswers.length - 1 ? '\n' : ''));

  }

  return scores;
}

module.exports = solution;