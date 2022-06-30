const getReminders = (numbers) => {
  return numbers.map(number => number % 42);
}

function solution(numbers) {
  const reminders = getReminders(numbers);
  return new Set(reminders).size;
}

module.exports = solution;