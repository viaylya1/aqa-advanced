// Count of positive, negative and zero numbers in the array

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++;
  }
  if (numbers[i] < 0) {
    negativeCount++;
  }
  if (numbers[i] === 0) {
    zeroCount++;
  }
}

console.log(
  `   Positive numbers count: ${positiveCount}, 
   Negative numbers count: ${negativeCount}, 
   Zero numbers count: ${zeroCount}`
);
