let n = 5;
function sumTillN(n) {
  if (n == 0) return 0;

  return n + sumTillN(n - 1);
}
console.log(sumTillN(n));
