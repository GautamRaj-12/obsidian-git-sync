## Class
- A class is a collection of Objects.
- It is not a real world entity. It is just a template or blueprint or prototype for creating Objects.
- It does not occupy memory.
- A class can include :
	- fields and variables
	- methods
	- constructors
	- blocks
	- nested class
- Syntax:
  ```java
		access-modifier class ClassName{}  
    ```
- By default the access modifier is default.

## Object
- An object is an instance of a class.
- It is a real world entity.
- It occupies memory.
- It consists of
	- Identity (name)
	- State/Attribute : properties/variables
	- Behaviors : methods
- All the objects share the attributes and behavior of the class.
- Syntax for creating an object
	1. Using `new`
	2. Using `newInstance`
	3. Using ` clone`
	4. Using `deserialization`
	5. Using  `factory` methods
- Using `new` keyword
	1. Declaration
		- Declaring a variable with an Object type
		- It does not create an object.
			- `Vehicle car;`
	2. Instantiation
		- This is when memory is allocated for an Object.
		- The `new` keyword is used to create an object.
		- A reference to the Object that was created is returned from the new keyword
			- `Car = new`
	3. Initialization
		 - The `new` keyword is followed by a call to a constructor. This call initializes the Object.
		 - In this, the values are put in the memory that was allocated.
			 - `Car = new Vechicle()`
	- In Two Lines
	 ```java
		 Vehicle car 
		 carnew Vehicle()
	   ```