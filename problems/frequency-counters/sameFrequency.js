function sameFrequency(first, second) {
  if(first === second) return true;
  
  const stringFirst = first.toString();
  const stringSecond = second.toString();

  const table = {};

  for (let i = 0; i < stringFirst.length; i++) {
    let number = stringFirst[i];
    
    table[number] ? table[number]++ : table[number] = 1;
  }

  for (let i = 0; i < stringSecond.length; i++) {
    let number = stringSecond[i];

    if (!table[number]) {
      return false;
    } else {
      table[number]--;
    }
  }

  return true;

}

module.exports = sameFrequency;