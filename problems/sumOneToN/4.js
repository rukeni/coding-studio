function sum(n) {
  if(n === 1) {
    return 1;
  }
  return sum( n - 1 ) + n;
}

const start = performance.now();
sum(1000000);
const end = performance.now();
console.log(`Time: ${(end - start) / 1000} seconds`);