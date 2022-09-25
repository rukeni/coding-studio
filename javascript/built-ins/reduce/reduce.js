const reduce = (array, func, initialValue) => {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = func(accumulator, array[i]);
  }

  return accumulator;
}

module.exports = reduce;