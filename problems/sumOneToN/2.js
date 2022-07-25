function sum (n) {
  return n * (n + 1) / 2;
}

const start = performance.now();
sum(1000000);
const end = performance.now();
console.log(`Time: ${(end - start) / 1000} seconds`);