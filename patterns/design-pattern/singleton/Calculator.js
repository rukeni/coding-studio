let instance;
let calculatedValue = 0;

class Calculator {
  constructor() {
    if(instance) {
      throw new Error('이미 생성된 인스턴스입니다. getInstance()를 대신 사용하세요.');
    }
    instance = this;
  }

  getCalculatedValue() {
    return calculatedValue;
  }

  increment() {
    return calculatedValue++;
  }

  static getInstance() {
    if (!instance) {
      throw new Error('아직 생성되지 않은 인스턴스입니다. 생성자를 대신 사용하세요.');
    }
    return instance;
  }
}

module.exports = Calculator;