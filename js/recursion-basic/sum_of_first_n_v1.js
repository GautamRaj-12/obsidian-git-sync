let n = 5,
  sum = 0;
function sumTillN(i, n) {
  if (i > n) return;
  sum = sum + i;
  sumTillN(i + 1, n);
}
sumTillN(1, n);
console.log(sum);
