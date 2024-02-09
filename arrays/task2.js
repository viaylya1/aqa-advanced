// Creating a new array by using .map

const startNumbers = [1, 2, 3, 4, 5];
const newNumbers = startNumbers.map((element, index) => element * index);
console.log(newNumbers);
