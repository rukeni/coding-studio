const convertToMinute = (hour, minute, costTime) => (hour * 60 + minute) + costTime;

const minuteToTime = (minute) => {
  const hour = Math.floor(minute / 60);
  const minute_ = minute % 60;
  return `${hour} ${minute_}`;
}

function solution(hour, minute, costTime) {
  const minute_ = convertToMinute(hour, minute, costTime);

  if(minute_ < 1440) {
    return minuteToTime(minute_);
  }

  return minuteToTime(minute_ - 1440);
}

module.exports = solution;