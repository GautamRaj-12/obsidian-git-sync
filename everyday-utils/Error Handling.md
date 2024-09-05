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

### Practical Example - ATM Withdrawal
