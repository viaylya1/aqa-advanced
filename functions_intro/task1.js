// Function declaration
let areaOfRectangle;
function culculateSquare1(width, height) {
  areaOfRectangle = width * height;
  return areaOfRectangle;
}

culculateSquare1(5, 10);
console.log(`Area of rectangle 1 is ${areaOfRectangle}`);

// Function expression
const culculateSquare2 = function (width, height) {
  areaOfRectangle = width * height;
  return areaOfRectangle;
};
culculateSquare2(5, 5);
console.log(`Area of rectangle 2 is ${areaOfRectangle}`);

// Arrow function
const culculateSquare3 = (width, height) => {
  areaOfRectangle = width * height;
  return areaOfRectangle;
};
culculateSquare3(10, 10);
console.log(`Area of rectangle 3 is ${areaOfRectangle}`);
