function sum (n) {
  return new Array(n).fill(0).map((_, i) => i + 1).reduce((a, b) => a + b);
}

const start = performance.now();
sum(1000000);
const end = performance.now();
console.log(`Time: ${(end - start) / 1000} seconds`);