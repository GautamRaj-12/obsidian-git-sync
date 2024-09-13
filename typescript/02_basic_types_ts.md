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
- JavaScript has three very commonly used [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive): `string`, `number`, and `boolean`. Each has a corresponding type in TypeScript. As you might expect, these are the same names you’d see if you used the JavaScript `typeof` operator on a value of those types:
	- `string` represents string values like `"Hello, world"`
	- `number` is for numbers like `42`. JavaScript does not have a special runtime value for integers, so there’s no equivalent to `int` or `float` - everything is simply `number`
	- `boolean` is for the two values `true` and `false`
	
```js
let lastName: string;
let age: number;
let isQualified:boolean;

lastName = "Raj";
age = 24;
isQualified = true;
```

## any
- In some ways, it just defeats typescript as It allows any type of value.
- We can use whenever you don’t want a particular value to cause typechecking errors.
```js
let album:any

album = "Some Album"
album = 2000;
album = true;
```

- The `any` type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
- We shouldn't use it all the time, but sometimes we may need it.
- **noImplicitAny***
	- When we don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to `any`.
	- We usually want to avoid this, though, because `any` isn’t type-checked. Use the compiler flag [`noImplicitAny`](https://www.typescriptlang.org/tsconfig#noImplicitAny) to flag any implicit `any` as an error. (Can be found in tsconfig.json file)
## functions
- Functions are the primary means of passing data around in JavaScript. TypeScript allows us to specify the types of both the input and output values of functions.
- The following is a perfectly fine js code, but ts will show red squiggly lines on the parameters a and b as these are inferred as implicitly any time.
```js
const sum = (a, b) => {
	return a + b;
};
```
- In Js using the '+' operator we can add numbers or concatenate strings.
	- So,  we need to define types for parameters.
### Parameter Type Annotations
- When we declare a function, we can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:
```js
const sum = (a:number, b:number) => {
	return a + b;
};
```
- When a parameter has a type annotation, arguments to that function will be checked:
- Now if we try to do the following:
```js
const sum = (a:number, b:number) => {
	return a + b;
};
sum(20)
```
- It will result in an error:
	- `Expected 2 arguments, but got 1.ts(2554) main.ts(14, 24): An argument for 'b' was not provided.`
- If we try to pass strings
```js
const sum = (a: number, b: number) => {
	return a + b;
};
sum("6", "3");
```
- It will result in an error
	- `Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)`
### Return Type Annotations
- We can also add return type annotations. Return type annotations appear after the parameter list:
- Right now in the above code, ts is automatically inferring the return type
![image](typescript/images/image-3.png)
- Let's try to return string:
![image](typescript/images/image-4.png)
- As we can see, we can return string and it inferred the type also to be string.
- So, it is wise to specify return type also.
```js
const sum = (a: number, b: number): number => {
	return a + b;
};
```
- Now if we try to return string:'
![image](typescript/images/image-5.png)