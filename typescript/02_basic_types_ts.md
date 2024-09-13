## Terms
- **STRONGLY TYPED LANGUAGES**
	- Demand the specification of types.
	- TS is a strongly typed language, where we specify the types of data that we are using.
- **LOOSELY TYPED LANGUAGES**
	- Do not require type specification.
	- JS is a loosely/weakly typed language.
- These relates to **STATIC TYPING** and **DYNAMIC TYPING** but both are not same.
- *A language that is strongly typed can be either statically or dynamically typed.*
- **STATIC TYPING**
	- TS is a statically typed language. **That means types are checked at compile time.**
- **DYNAMIC TYPING**
	- JS is a dynamically typed language. **That means types are checked at run time.**

## Benefits of TS
- Self documenting code
- Catch errors in development
- Great For Teams

## More Terms
### Inference
- TypeScript type _inference_ is _a feature that allows the TypeScript compiler to automatically deduce the type of a variable or expression_.
- When we write the following code:
```js
let lastName = "Raj"
```
- It is a simple JS code, but when we hover over it, we see the following:
 ![image](typescript/images/image-1.png)
 - So Typescript has inferred the type of data we are creating.

### Implicit Typing
- The above procedure is called Implicit Typing.
- Implicit typing is a TypeScript feature that **automatically infers the type of a variable based on its initial value or usage in the code**, rather than requiring the programmer to explicitly declare the type.

### Explicit Typing
- In TypeScript, you declare variables with explicit types by **specifying the type of the variable after its name using a colon ( : ) followed by the desired data type which can be string, number, etc**.
- In this case, TS no longer has to infer the type of data.
```js
let lastName: string = "Raj";
```

## Cases
### Case 1:
- The following code is a perfectly valid js code. As in JS we can reassign a variable when using let and It can be of any data type.
```js
let lastName = "Raj"
lastName = 24
```
- But in TS, TS will infer the type of data type and will give red squiggly line, even if we don't explicitly declare it is a string.
![image](typescript/images/image-2.png)
- We can reassign the variable again but only with a string type.

### Case 2:
- We can declare variable with type and can reassign them later just as in JS.
```js
let lastName: string
lastName = "Raj"
```
## string, number and boolean types
- 
```js
let lastName: string;
let age: number;
let isQualified:boolean;

lastName = "Raj";
age = 24;
isQualified = true;
```

## any
- In some situations, not all type information is available or its declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking. To do so, we label these values with the `any` type:
```js
let album:any

album = "Some Album"
album = 2000;
album = true;
```

