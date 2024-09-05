## JavaScript
### Program that crashes (without error handling)
- This JavaScript code will crash when trying to access a property of `undefined`.
```javascript
let person = null;
console.log(person.name); // This will throw an error: Cannot read property 'name' of null
console.log("This line will not execute because of the crash");
```

### Program that doesn't crash (with error handling)
- Here’s the same program, but with error handling using a `try...catch` block.
```js
let person = null;

try {
  console.log(person.name); // This will throw an error, but it will be caught
} catch (error) {
  console.log("An error occurred: " + error.message); // Error is handled here
}

console.log("This line will execute because the error was handled");
```

### Practical Example - ATM Withdrawal (Without Error Handling)
```js
function withdrawMoney(balance, amount) {
  if (amount > balance) {
    throw new Error("Insufficient funds");
  }

  balance -= amount;
  console.log(`Withdrawal successful! Remaining balance: $${balance}`);
}

let accountBalance = 100;

console.log("Attempting to withdraw $150...");
withdrawMoney(accountBalance, 150); // This will throw an error and crash
console.log("This line will not execute");

```

### Practical Example - ATM Withdrawal (With Error Handling)
``` js
function withdrawMoney(balance, amount) {
  try {
    if (amount > balance) {
      throw new Error("Insufficient funds");
    }
    balance -= amount;
    console.log(`Withdrawal successful! Remaining balance: $${balance}`);
  } catch (error) {
    console.log(`Transaction failed: ${error.message}`);
  }
}

let accountBalance = 100;

console.log("Attempting to withdraw $150...");
withdrawMoney(accountBalance, 150); // This will be caught and handled

console.log("Program continues without crashing");
```

## Error object in JS
- `Error` objects are thrown automatically when runtime errors occur.
- The `Error` object can also be used as a base object for user-defined exceptions.