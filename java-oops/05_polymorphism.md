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

## A more practical example involving both overloading and overriding
```java
// Base class for general shopping
class Shopping {
    
    // Overloaded method - purchase a single item
    void purchase(String itemName) {
        System.out.println("Purchased item: " + itemName);
    }
    
    // Overloaded method - purchase multiple items
    void purchase(String[] itemNames) {
        System.out.println("Purchased items: ");
        for(String item : itemNames) {
            System.out.println(item);
        }
    }
    
    // Overloaded method - purchase with a coupon
    void purchase(String itemName, String couponCode) {
        System.out.println("Purchased item: " + itemName);
        System.out.println("Applied coupon: " + couponCode);
    }
}

// Subclass that overrides the purchase methods to apply discounts
class DiscountShopping extends Shopping {

    // Overriding method - purchase a single item with a discount
    @Override
    void purchase(String itemName) {
        System.out.println("Purchased item with discount: " + itemName);
    }

    // Overriding method - purchase multiple items with a discount
    @Override
    void purchase(String[] itemNames) {
        System.out.println("Purchased items with discount: ");
        for(String item : itemNames) {
            System.out.println(item);
        }
    }

    // Overriding method - purchase with a coupon and additional discount
    @Override
    void purchase(String itemName, String couponCode) {
        System.out.println("Purchased item: " + itemName);
        System.out.println("Applied coupon: " + couponCode);
        System.out.println("Additional discount for premium member.");
    }
}

public class ShoppingSystem {
    public static void main(String[] args) {
        Shopping normalShopping = new Shopping();
        DiscountShopping premiumShopping = new DiscountShopping();
        
        System.out.println("---- Normal Shopping ----");
        // Normal shopping for a single item
        normalShopping.purchase("Laptop");
        
        // Normal shopping for multiple items
        String[] items = {"Laptop", "Headphones", "Mouse"};
        normalShopping.purchase(items);
        
        // Normal shopping with a coupon
        normalShopping.purchase("Smartphone", "DISCOUNT10");
        
        System.out.println("\n---- Premium Member Shopping ----");
        // Premium shopping for a single item
        premiumShopping.purchase("Laptop");
        
        // Premium shopping for multiple items
        premiumShopping.purchase(items);
        
        // Premium shopping with a coupon
        premiumShopping.purchase("Smartphone", "PREMIUM20");
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
		 ![image](java-oops/images/image-1.png)
- **Different cases of Type Promotion**
	- *CASE 1*
	```java
	package polymorphism;  
  
	class One{  
	    void show(int a){  
	        System.out.println("int method");  
	    }  
	    void show(String a){  
	        System.out.println("String method");  
	    }  
	}  
	public class AutomaticPromotion1 {  
	    public static void main(String[] args) {  
	        One obj1 = new One();  
	        obj1.show(5); //int method  
	        obj1.show("sss"); //string method  
	        obj1.show('a'); // automatically promoted to int  
	    }  
	}
	```
	- *CASE 2*
	```java
	package polymorphism;
	
	class One {
	    // Method that accepts a StringBuffer
	    void show(StringBuffer a) {
	        System.out.println("String Buffer method");
	    }
	
	    // Method that accepts a String
	    void show(String a) {
	        System.out.println("String method");
	    }
	}
	
	public class AutomaticPromotion1 {
	    public static void main(String[] args) {
	        One obj1 = new One();
	        
	        // Calling the method with a String, this matches the `show(String a)` method
	        obj1.show("sss"); // Output: String method
	
	        // Calling the method with a StringBuffer, this matches the `show(StringBuffer a)` method
	        obj1.show(new StringBuffer("abx")); // Output: String Buffer method
	
	        /* Calling with null causes ambiguity since both String and StringBuffer can accept null This will result in a compile-time error because the compiler can't decide which method to call*/
	        
	        // obj1.show(null);  // Compile-time error: ambiguous method call
	
	        // Compile-time error because there's no `show` method that accepts an int
	        // Java will attempt to auto-box the primitive `5` into an `Integer`, but there's no `show(Integer)` method
	        // obj1.show(5);  // Compile-time error: no suitable method found for show(int)
	
	        // Compile-time error because there's no `show` method that accepts a char
	        // Java will attempt to auto-box the primitive `'a'` into a `Character`, but there's no `show(Character)` method
	        // obj1.show('a');  // Compile-time error: no suitable method found for show(char)
	    }
	}
	```

	- Object is the parent class of all the classes in java.
		- While resolving Overloaded methods, Compiler will always give precedence for the child type argument compared to the parent type argument.