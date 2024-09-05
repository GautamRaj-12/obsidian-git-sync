let count = 0;
function printName() {
  if (count >= 5) {
    return;
  }
  console.log("Gautam");
  count++;
  printName();
}

printName();
