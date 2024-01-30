function checkOrder(available, ordered) {
  switch (true) {
    case available < ordered:
      return console.log(
        '"Your order is too large, we don’t have enough goods."'
      );
    case ordered === 0:
      return console.log('"Your order is empty"');
    case available >= ordered:
      return console.log("“Your order is accepted”");
  }
}

checkOrder(15, 20);
checkOrder(15, 0);
checkOrder(15, 5);
