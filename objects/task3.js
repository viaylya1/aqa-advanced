// Combining objects with spread operator

const car1 = {
  brand: "Mazda",
  model: "CX-5",
  year: 2015,
};

const car2 = {
  brand: "Nissan",
  model: "Juke",
  owner: "Ted Novan",
};

const car3 = { ...car1, ...car2 };
console.log(car3);
