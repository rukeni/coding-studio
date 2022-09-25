function sum(n) {
  let sum = 0;

  for(let i = 0; i < n; i++) {
    sum += i + 1;
  }

  return sum;
}

const start = performance.now();
sum(1000000);
const end = performance.now();
console.log(`Time: ${(end - start) / 1000} seconds`);