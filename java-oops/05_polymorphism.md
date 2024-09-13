## What is Polymorphism?
- Poly means many, morphism means forms
## Types of Polymorphism

### Compile Time Polymorphism(Static Polymorphism)
- To achieve it we use: ***METHOD OVERLOADING***
- It is handled by compiler.
### Run Time Polymorphism(Dynamic Polymorphism)
- To achieve it we use: ***METHOD OVERRIDING***
- It is handled by JVM.

## Method Overloading
- Multiple methods with same name.
- Both methods in same class.
- Different Arguments (Any of the following)
	- Numbers
	```java
	## Method Overloading - Multiple methods with same name. - Both methods in same class. - Different Arguments (Any of the following) - Numbers - Sequence - Type of Arguments give practical real life example for all the 3 cases
    ```
	- Sequence
	- Type of Arguments
## Method Overriding
- Multiple methods with same name.
- Both methods in same class.
- Same Arguments (Any of the following)
	- Numbers
	- Sequence
	- Type of Arguments
## Important Questions
- **Can we achieve method overloading by changing the return type of method only?**
	- No, Because of ambiguity
- **Can we overload main() method?**
	- Yes, we can have any number of main methods in a class by method overloading. This is because JVM always calls main() method which receives string array as arguments only.
- **Method Overloading and Type Promotion**
	- ***AUTOMATIC PROMOTION*** happens in polymorphism
		- One type is promoted to another implicitly if no matching datatype is found.
		 ![[Pasted image 20240911182344.png]]
- **Different cases of Type Promotion**