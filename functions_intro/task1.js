// Function declaration
function calculateArea1(width, height) {
  return width * height;
}
console.log(`Area of rectangle 1 is ${calculateArea1(5, 10)}`);

// Function expression
// eslint-disable-next-line func-names
const calculateArea2 = function (width, height) {
  return width * height;
};
console.log(`Area of rectangle 2 is ${calculateArea2(5, 5)}`);

// Arrow function
const calculateArea3 = (width, height) => width * height;
console.log(`Area of rectangle 3 is ${calculateArea3(10, 10)}`);
