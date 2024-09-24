let n = 1;
function printTillOne(n) {
  if (n > 5) return;
  printTillOne(n + 1);
  console.log(n);
}
printTillOne(n);
