const Calculator = require('./Calculator');

describe('Calculator', () => {
  const calculator = new Calculator();

  it('returns 1', () => {
    expect(calculator.getCalculatedValue()).toBe(0);
    calculator.increment();
    expect(calculator.getCalculatedValue()).toBe(1);
  });
})