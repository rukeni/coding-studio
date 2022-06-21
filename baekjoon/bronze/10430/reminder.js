// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

const reminder1 = (a, b, c) => ( a + b ) % c;

const reminder2 = (a, b, c) => (( a % c ) + ( b % c )) % c;

const reminder3 = (a, b, c) => ( a * b ) % c;

const reminder4 = (a, b, c) => (( a % c ) * ( b % c)) % c;

module.exports = {
  reminder1,
  reminder2,
  reminder3,
  reminder4
}