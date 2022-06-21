const convertToMinute = (hour, minute) => (hour * 60 + minute) - 45;

const minuteToTime = (minute) => {
  const hour = Math.floor(minute / 60);
  const minute_ = minute % 60;
  return `${hour} ${minute_}`;
}

function solution(hour, minute) {
  const minute_ = convertToMinute(hour, minute);

  if(minute_ >= 0) {
    return minuteToTime(minute_);
  }

  return minuteToTime(minute_ + 1440);
}

module.exports = solution;