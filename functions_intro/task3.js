/* eslint-disable default-case */
// eslint-disable-next-line consistent-return
function checkOrder(available, ordered) {
  switch (true) {
    case available < ordered:
      return "Your order is too large, we don't have enough goods";
    case ordered === 0:
      return 'Your order is empty';
    case available >= ordered:
      return 'Your order is accepted';
  }
}

console.log(checkOrder(15, 20));
console.log(checkOrder(15, 0));
console.log(checkOrder(15, 5));
