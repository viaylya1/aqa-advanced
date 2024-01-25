// Declaring variables for primitive types

// Number
const integerNumber = 5;
const fractionalNumber = 5.5;
const PI = 3.14;
console.log(integerNumber, fractionalNumber, PI);
console.log(typeof integerNumber, typeof fractionalNumber, typeof PI);

// String
const firstName = "Vika";
const lastName = "Bryzhak";
console.log(firstName, typeof firstName);
console.log(lastName, typeof lastName);

// Boolean
const isMarried = false;
const hasCar = true;
console.log(isMarried, hasCar);
console.log(typeof isMarried, typeof hasCar);

// Undefined
const _unknown;
const $unknown = undefined;
console.log(_unknown, $unknown);
console.log(typeof _unknown, typeof $unknown);

//NULL
const noValue = null;
console.log(noValue);

if (noValue === null) {
  console.log("noValue is null");
} else {
  console.log("noValue is not null");
}

// BigInt
const big_Number = BigInt(123456789012345678901211112234445555555554567890);
console.log(big_Number);
console.log(typeof big_Number);

// Symbol
const uniqueValue = Symbol("id");
console.log(uniqueValue);
console.log(typeof uniqueValue);
