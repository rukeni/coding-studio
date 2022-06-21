const {sum, subtract, multiply, divide, reminder, operations} = require('./operations')

describe('sum', () => {
  it('returns sum', () => {
    expect(sum(1, 2)).toBe(3);
  }
  );
});

describe('subtract', () => {
  it('returns subtract', () => {
    expect(subtract(1, 2)).toBe(-1);
  }
  );
});

describe('multiply', () => {
  it('returns multiply', () => {
    expect(multiply(1, 2)).toBe(2);
  }
  );
});

describe('divide', () => {
  it('returns divide', () => {
    expect(divide(1, 2)).toBe(0);
  }
  );
});

describe('reminder', () => {
  it('returns reminder', () => {
    expect(reminder(1, 2)).toBe(1);
  })
});

describe('operations', () => {
  it('returns operations string', () => {
    expect(operations(7, 3)).toBe('10' + '\n' + '4' + '\n' + '21' + '\n' + '2' + '\n' + '1');
  })
});