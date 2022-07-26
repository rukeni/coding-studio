function maxSubArraySum(array, number) {
  let maxSum = 0;
  let tempSum = 0;
  
  if( array.length < number) return null;

  for(let i = 0; i < number; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let i = 0; i < array.length; i++) {
    tempSum = tempSum - array[i - number] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}