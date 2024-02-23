function handleNum(number, onEven, onOdd) {
  // eslint-disable-next-line no-unused-expressions
  number % 2 === 0 ? onEven() : onOdd();
}

function handleEven() {
  console.log('The number is even');
}

function handleOdd() {
  console.log('The number is odd');
}

handleNum(5, handleEven, handleOdd);
handleNum(4, handleEven, handleOdd);
