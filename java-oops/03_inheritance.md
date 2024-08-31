## What is inheritance?
- Inheritance is inheriting the properties of parent class into child class.
- It is a mechanism in which one object acquires all the properties and behaviors of a parent object.
- It represents the `IS-A` relationship which is also known as a parent-child relationship. For ex: 
	- Dog `IS-A` Animal
	- Car `IS-A` Vehicle
	- Surgeon `IS-A` Doctor
	- Sparrow `IS-A` Bird
## Advantages of Inheritance
- Code Re-usability
- It promotes runtime polymorphism by allowing method overriding.
## Disadvantages of Inheritance
- Using inheritance the parent and the child class gets tightly coupled.

## Types of Inheritance
1. **Single Inheritance**: In single inheritance, one class extends another class(one class only).
2. **Multilevel Inheritance**: In multilevel inheritance, one class can inherit from a derived class. Hence the derived class becomes the base class for a new class.
3. **Hierarchical Inheritance**:In hierarchical inheritance, one class is inherited by many sub classes.
4. **Multiple Inheritance**: ***NOT SUPPORTED IN JAVA***: In multiple inheritance, one class extends more than one class.
5.  **Hybrid Inheritance**: ***NOT SUPPORTED IN JAVA***: In hybrid inheritance, a combination of any two inheritances is used.
## Points to Remember
- Inheritance is achieved by using `extends` keyword.
- Every class has a super or say parent class i.e. Object Class ()