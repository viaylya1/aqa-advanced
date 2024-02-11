// For...of for Objects array. Destructuring in a cycle.

const users = [
  {
    firstName: "Ted",
    lastName: "Novan",
    age: 23,
    isMarried: false,
    courses: ["Math", "History", "Programming"],
  },
  {
    firstName: "Nick",
    lastName: "Grant",
    age: 28,
    isMarried: true,
    courses: ["Designer", "Doctor"],
  },
];

for (const usersList of users) {
  console.log(
    `${usersList.firstName} ${usersList.lastName} is ${usersList.age} years old, married: ${usersList.isMarried} and visited courses: ${usersList.courses}`
  );
}

// Destructuring in a cycle
for (const { firstName, age } of users) {
  console.log(`${firstName} is ${age} years old`);
}
