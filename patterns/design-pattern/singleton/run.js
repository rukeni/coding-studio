const Calculator = require('./Calculator');

const calculator = new Calculator();

const value = calculator.getCalculatedValue();

calculator.increment();

const value2 = calculator.getCalculatedValue();

// const calculator2 = new Calculator();

// const value3 = calculator2.getCalculatedValue();

calculator.decrement = () => {
  return calculator.getCalculatedValue() - 1;
}

console.log( 'value', value );

console.log( 'value2', value2 );

// console.log( 'value3', value3 );

// console.log( 'calculator === calculator2', calculator === calculator2, );

calculator.decrement();

const value4 = calculator.getCalculatedValue();

console.log( 'value4', value4 );
