const getChunk = (string, size) => {
  return string.match(new RegExp(`.{1,${size}}`, 'g'));
}

const compressString = (strings) => {
  const result = [];

  const targets = [...strings];
  let prev = targets[0];
  let prevIndex = 0;

  let count = 1;

  for(let i = 1; i < targets.length; i++) {
    console.log(targets[i], '===', prev);
    if(targets[i] === prev) {
      count++;
    } else {
      if(count > 1) {
        // targets[prevIndex] = count + targets[prevIndex];
        result.push(count + prev);
      }
      count = 1;
    }
    prev = targets[i];
    prevIndex = i;
  }

  if(count > 1) {
    // targets[prevIndex] = count + targets[prevIndex];
    result.push(count + prev);
  }

  return result.join('');
}

function solution(string) {
  const compressedValues = [];

  for(let i = 0; i < string.length; i++) {
    const target =  getChunk(string, i + 1);
    const compressedString = compressString(target);
    compressedValues.push(compressedString);
  }

  return compressedValues;
}

module.exports = {
  solution,
};