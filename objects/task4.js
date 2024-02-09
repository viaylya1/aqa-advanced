// Adding and deleting properties from the object

const person = {
  firstName: "Nick",
  lastName: "Grant",
  age: 28,
};

person.email = "nick.grant@gmail.com";
delete person.age;

console.log(person);
