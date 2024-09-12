## Introduction to TypeScript
- **TypeScript Overview**:
    - TypeScript is a *strongly typed superset of JavaScript* that provides better tooling and *type safety*.
    - It is developed by Microsoft, with Anders Hejlsberg being the creator, who also created C#.
    - TypeScript compiles down to JavaScript and offers features like static type checking.
- **Resources**:    
    - [TypeScript Official Website](https://www.typescriptlang.org)

## Setting Up Typescript
1. **Prerequisites**:
	- Basic understanding of JavaScript fundamentals.
2. **Required Tools**:
	- **Visual Studio Code**: [Download Visual Studio Code](https://code.visualstudio.com)
	- **Node.js & npm**: [Download Node.js (includes npm)](https://nodejs.org)
3. **Installation**
	- Install Typescript globally using npm
	```bash
	npm install -g typescript
	```
4. **Create Your First Typescript Project**
   - Create an `index.html` and a `main.ts` file in a project directory.
   - Example `index.html`:
 ```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript Example</title>
    <style>
        body {
            background-color: black;
            color: white;
        }
    </style>
</head>
<body>
    <script src="js/main.js" defer></script>
</body>
</html>
 ```
 - Example `main.ts`:
```js
let username: string = "Dave";
console.log(username);
```

5. **Compiling TypeScript**:
	- Compile TypeScript file to JavaScript:
	```bash
	tsc main.ts
    ```
    - Alternatively, use the watch mode to automatically recompile:
	```bash
	tsc -w
	```

## Project Structure
1. **Organizing Files**:
	- **Source Folder**: Contains TypeScript files (`.ts`).
	- **Build Folder**: Contains the compiled JavaScript files (`.js`), HTML, and CSS.
	```bash
	/src
	  main.ts
	  test.ts
	/build
	  /js
	    main.js
    index.html
	```
2. **TypeScript Configuration (`tsconfig.json`)**:
	- Create a `tsconfig.json` file to manage TypeScript project settings:
	```json
	{
	  "compilerOptions": {
	    "outDir": "./build/js",
	    "rootDir": "./src",
	    "target": "ES2016",
	    "strict": true
	  },
	  "include": ["src/**/*"]
	}
	```
	- **`rootDir`**: Directory containing TypeScript files.
	- **`outDir`**: Directory where JavaScript files will be compiled to.
3. **Watching for Changes**:
	- Use the watch mode in `tsc` to automatically recompile TypeScript files when changes are detected:
	- `tsc -w
## Type Checking and Compilation
1. **Static Type Checking**:
	-  TypeScript provides compile-time type checking, reducing runtime errors.
	- Example:
	```js
	let a: number = 12;
	let b: string = "6";
	let c: number = 2;
	
	console.log(a / b); // Error: Cannot perform arithmetic operation with a number and string
	console.log(c * b); // Error: Cannot perform arithmetic operation with a number and string
	```
2. **Explicit Typing**:
	- Define variable types explicitly to avoid type errors:
	```js
	let a: number = 12;
	let b: string = "6";
	let c: number = 2;
	```
1. **Handling Type Errors**:
	- TypeScript provides errors for mismatched types, helping to catch mistakes early in development.