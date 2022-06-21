// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

const {reminder1, reminder2, reminder3, reminder4} = require('./reminder');

describe('reminder', () => {
  it('returns reminder', () => {
    expect(reminder1(5, 8, 4)).toBe(1);
    expect(reminder2(5, 8, 4)).toBe(1);
    expect(reminder3(5, 8, 4)).toBe(0);
    expect(reminder4(5, 8, 4)).toBe(0);
  });
})