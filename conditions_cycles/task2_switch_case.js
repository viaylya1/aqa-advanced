/* eslint-disable default-case */
const averageGrade = 100;
// const averageGrade = (Math.random() * 101).toFixed(0);
// this can be used for getting a random integer number from 0 to 100 in the scope of this task

switch (true) {
  case averageGrade < 60:
    console.log('Незадовільно');
    break;
  case averageGrade >= 60 && averageGrade <= 70:
    console.log('Задовільно');
    break;
  case averageGrade >= 71 && averageGrade <= 80:
    console.log('Добре');
    break;
  case averageGrade >= 81 && averageGrade <= 90:
    console.log('Дуже добре');
    break;
  case averageGrade >= 91 && averageGrade <= 100:
    console.log('Відмінно');
}

// We could've also used "default" instead of the last "case" as all the left values would be 91-100
// default:
//   console.log("Відмінно");
