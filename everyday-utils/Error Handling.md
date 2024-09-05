## Error object in JS
- `Error` objects are thrown automatically when runtime errors occur.
- Automatic runtime errors that occur due to system failures or incorrect code execution
- The following code gives an error automatically: 
```js
let person = null;
console.log(person.name); // This will throw an error: Cannot read property 'name' of null
console.log("This line will not execute because of the crash");
```

```bash
VM33:2 Uncaught TypeError: Cannot read properties of null (reading 'name')
    at <anonymous>:2:20
```

- The `Error` object can also be used as a base object for user-defined exceptions.
-  It is useful when you want to signal errors due to logical issues rather than syntax or runtime failures.
- The following code gives an user defined error.
```js
let person = null;
if(person===null){
    throw new Error("Name can't be null")
}
console.log(person);
console.log("This line will not execute because of the crash");
```

```shell
VM180:3 Uncaught Error: Name can't be null
    at <anonymous>:3:11
```

## Error Types in JS
- **EvalError**: Creates an instance representing an error that occurs regarding the global function [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)
- **RangeError**: Creates an instance representing an error that occurs when a numeric variable or parameter is outside its valid range.
- **ReferenceErrror**: Creates an instance representing an error that occurs when de-referencing an invalid reference.
- **SyntaxError**: Creates an instance representing a syntax error.
- **TypeError**: Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
- **URIError**: Creates an instance representing an error that occurs when [`encodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) or [`decodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI) are passed invalid parameters.
- **AggregateError**: Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by [`Promise.any()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any).
- **InternalError**: Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".

## Error Instance Properties
- **message**:  Error message for user-created `Error` objects, this is the string provided as the constructor's first argument.
- **name**: Represents the name for the type of error. For `Error.prototype.name`, the initial value is `"Error"`. Subclasses like [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) and [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) provide their own `name` properties.
- **stack**: These properties are own properties of each `Error` instance.
## Error Handling In JavaScript
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
