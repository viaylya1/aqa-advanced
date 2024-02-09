// Ascending sorting of elements in the newly copied array

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const numbersListCopy = structuredClone(numbersList);
const ascendingNumbers = numbersListCopy.sort((b, a) => b - a);
console.log(ascendingNumbers);
console.log(numbersList);
