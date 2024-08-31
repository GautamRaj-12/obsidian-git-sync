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
- Every class has a super or say parent class.
	- If we create a class that does not extends any class. Then by default it extends **Object Class.**
	- So **Object Class** is a parent class of all classes in Java.
- Below does not take part in inheritance:
	- ***Constructors***:A subclass inherits all the members (fields,methods, and nested classes) from its super class. Constructors are not members, so they are not inherited by subclasses, but the constructor of the superclass can be invoked from the subclass.
	- ***Private Members***: A subclass  does not inherit the private members of its parent class. However, if the superclass has public or protected methods(like getters and setters) for accessing its private fields, these can also be used by the subclass.
- There can only be one super class, not more than that, because java does not support multiple inheritance.

### Single Inheritance
```java
package oops;  
  
//Base Class - User  
class User {  
    String name;  
    String email;  
  
    void displayIntro(){  
        System.out.println("You are NOT A PRIME user");  
    }  
    void seeContent(){  
        System.out.println("You can browse the contents");  
    }  
    void watchFreeVideos() {  
        System.out.println("You can watch free videos");  
    }  
}  
  
//Sub Class - PrimeUser extends User  
class PrimeUser extends User{  
    int subscription;  
    int months;  
    String intro;  
  
    void initData(int s, int m){  
        subscription = s;  
        months = m;  
    }  
    // Method Overriding
    void displayIntro(){  
        System.out.println("You are a PRIME user");  
    }  
    void watchPremiumVideos(){  
        System.out.println("You can watch premium videos, You are subscribed at $ "+subscription+" for "+months+" months");  
    }  
}  
  
public class AmazonPrime {  
    public static void main(String[] args) {  
        PrimeUser pu1 = new PrimeUser();  
        pu1.initData(299,3);  
        pu1.displayIntro();  
        pu1.seeContent();  
        pu1.watchFreeVideos();  
        pu1.watchPremiumVideos();  
        System.out.println("----------------------------------------------------------");  
        User u1 = new User();  
        u1.displayIntro();  
        u1.seeContent();  
        u1.watchFreeVideos();  
        // u1.watchPremiumVideos(); // ERROR  
    }  
}
```

### Multilevel Inheritance
```java

```