function printWithDelay(text, ms) {
  setTimeout(() => console.log(text), ms);
}

printWithDelay('This text was sent after 2 seconds delay', 2000);
