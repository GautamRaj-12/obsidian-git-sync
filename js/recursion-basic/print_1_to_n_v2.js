let n = 5;
function printTillN(i, n) {
  if (i < 1) return;
  printTillN(i - 1, n);
  console.log(i);
}
printTillN(n, n);
