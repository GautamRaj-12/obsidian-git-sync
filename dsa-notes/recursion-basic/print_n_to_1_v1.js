let n = 5;
function printTillOne(i, n) {
  if (i <= 0) return;
  console.log(i);
  printTillOne(i - 1, n);
}
printTillOne(5, n);
