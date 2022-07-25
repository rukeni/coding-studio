function sum (n) {
  return new Array(n).fill(0).map((_, i) => i + 1).reduce((a, b) => a + b);
}