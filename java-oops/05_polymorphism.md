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
	class BankAccount {
    // Method with one argument
    public void createAccount(String accountHolder) {
        System.out.println("Account created for: " + accountHolder);
    }

    // Method with two arguments
    public void createAccount(String accountHolder, double initialDeposit) {
        System.out.println("Account created for: " + accountHolder + " with initial deposit: $" + initialDeposit);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.createAccount("Gautam Raj");
        account.createAccount("Gautam Raj", 5000);
    }
}
    ```
	- Sequence
	```java
	class Rectangle {
    // Method where length comes first
    public void calculateArea(int length, int width) {
        System.out.println("Area (length first): " + (length * width));
    }

    // Method where width comes first
    public void calculateArea(double width, int length) {
        System.out.println("Area (width first): " + (length * width));
    }
}

public class Main {
    public static void main(String[] args) {
        Rectangle rect = new Rectangle();
        rect.calculateArea(10, 5);   // length first
        rect.calculateArea(5.0, 10); // width first (using double for width)
    }
}

	```
	- Type of Arguments
	```java
	class Calculator {
    // Method to add two integers
    public int add(int a, int b) {
        return a + b;
    }

    // Method to add two floating-point numbers
    public double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Integer sum: " + calc.add(5, 10));          // integer addition
        System.out.println("Double sum: " + calc.add(5.5, 10.25));      // double addition
    }
}
	```
## Method Overriding
- Multiple methods with same name.
- Both methods in same class.
- Same Arguments (All of the following should be exact same)
	- Numbers
	- Sequence
	- Type of Arguments
	```java
	class Employee {
    public void calculateSalary(int baseSalary) {
        System.out.println("Employee salary: " + baseSalary);
    }
}

class Manager extends Employee {
    // Overriding method with the same number of arguments
    @Override
    public void calculateSalary(int baseSalary) {
        int bonus = 5000;
        System.out.println("Manager salary: " + (baseSalary + bonus));
    }
}

public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee();
        emp.calculateSalary(30000); // Calls Employee's method

        Manager mgr = new Manager();
        mgr.calculateSalary(30000); // Calls Manager's method (overridden)
    }
}

	```
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