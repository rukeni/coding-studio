const calculateLeftDays = (progresses, speeds) => {
  return progresses.map((progress, index) => Math.ceil(((100 - progress) / speeds[index])));
}

const getReference = (current, previous) => {
  return current <= previous ? previous : current;
}

const countCompletedDeployments = workDays => {
  const completedDeployments = [];
  let max = workDays[0];
  let count = 1;

  for(let i = 1; i < workDays.length; i++) {
    if(max >= workDays[i]) {
      count++;
    } else {
      completedDeployments.push(count);
      max = workDays[i];
      count = 1;
    }
  }

  completedDeployments.push(count);

  return completedDeployments;
}

function solution(progresses, speeds) {
  const workDays = calculateWorkDays(progresses, speeds);

  const completedDeployments = countCompletedDeployments(workDays);
  return completedDeployments;
}

module.exports = {
  calculateLeftDays,
  getReference,
  countCompletedDeployments,
  solution,
};