let i = 1,
  n = 10;
function printTillN(i, n) {
  if (i > n) {
    return;
  }
  console.log(i);
  i++;
  printTillN(i, n);
}
printTillN(i, n);
