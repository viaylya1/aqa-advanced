const averageGrade = 85;
//const averageGrade = (Math.random() * 101).toFixed(0); // this can be used for getting a random integer number from 0 to 100 in the scope of this task

if (averageGrade < 60) {
  console.log("Незадовільно");
} else if (averageGrade >= 60 && averageGrade <= 70) {
  console.log("Задовільно");
} else if (averageGrade >= 71 && averageGrade <= 80) {
  console.log("Добре");
} else if (averageGrade >= 81 && averageGrade <= 90) {
  console.log("Дуже добре");
} else if (averageGrade >= 91 && averageGrade <= 100) {
  console.log("Відмінно");
}

// We could've also used "else" instead of the last "else if" as all the left values would be 91-100
// else {
//   console.log("Відмінно");
// }
