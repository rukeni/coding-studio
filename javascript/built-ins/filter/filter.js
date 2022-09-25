const filter = (array, callback) => {
  const filtered = [];

  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      filtered.push(array[i]);
    }
  }

  return filtered;
}

module.exports = filter;