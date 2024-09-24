let n = 5,
  i = 1;
function printName(i, n) {
  if (i > n) {
    return;
  }
  console.log("Gautam");
  i++;
  printName(i, n);
}

printName(i, n);
