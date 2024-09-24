let n = 5;
function printTillOne(n) {
  if (n <= 0) return;
  console.log(n);
  printTillOne(n - 1);
}
printTillOne(n);
