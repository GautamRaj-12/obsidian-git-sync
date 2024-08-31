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
# Understanding Inheritance with Java Example

## Key Concepts in Inheritance

1. **Inheritance**:
   - Inheritance is a mechanism where a new class (subclass) inherits properties and behaviors (fields and methods) from an existing class (base class or superclass). This allows for code reuse and the creation of a hierarchical relationship between classes.

2. **Base Class (Super Class)**:
   - The `User` class is the base class in this example. It defines common attributes (`name`, `email`) and behaviors (methods like `setDetails`, `displayIntro`, `seeContent`, and `watchFreeVideos`) that are applicable to all users.

3. **Derived Class (Sub Class)**:
   - The `PrimeUser` class is the derived class that extends the `User` class. It inherits all the properties and behaviors of the `User` class and also introduces additional attributes (`subscription`, `months`) and behaviors (`initData`, `watchPremiumVideos`).

## How Inheritance Works in the Example

- **Accessing Inherited Methods**:
  - The `PrimeUser` class automatically has access to the methods defined in the `User` class, such as `setDetails`, `displayIntro`, `seeContent`, and `watchFreeVideos`.
  - In the `main` method, when an object of `PrimeUser` (i.e., `pu1`) is created, it can call these inherited methods directly.

- **Overriding Methods**:
  - The `PrimeUser` class overrides the `displayIntro` method of the `User` class. Method overriding allows the subclass to provide a specific implementation for a method that is already defined in its superclass.
  - When `pu1.displayIntro()` is called, the `displayIntro` method in the `PrimeUser` class is executed instead of the one in the `User` class. This allows `PrimeUser` to customize the introduction message for prime users.

- **New Methods in Subclass**:
  - The `PrimeUser` class adds a new method, `watchPremiumVideos`, which is not available in the `User` class. This method allows prime users to watch premium videos, reflecting the additional privileges of a prime user.

## Important Observations

- **Code Reusability**:
  - By using inheritance, the `PrimeUser` class doesn't need to redefine the common behaviors (`setDetails`, `seeContent`, `watchFreeVideos`). This promotes code reuse and makes the code more maintainable.

- **Error on Accessing Subclass-Specific Methods via Superclass Object**:
  - The code `u1.watchPremiumVideos()` is commented out because it would result in a compilation error. This is because `u1` is an object of the `User` class, and the `User` class does not have a `watchPremiumVideos` method. The method is specific to the `PrimeUser` class, illustrating that subclass-specific methods are not accessible through a superclass reference.

## Summary of the Execution Flow

- A `User` object (`u1`) is created, and basic user details are set. The user can see content and watch free videos, but not premium videos.
- A `PrimeUser` object (`pu1`) is created, which has all the capabilities of a regular user plus the ability to watch premium videos. The prime user can also see content and watch free videos, but they receive a different introduction and additional privileges.

This example encapsulates how inheritance allows the creation of more specialized classes (like `PrimeUser`) from a general class (`User`) while reusing existing code and enhancing functionality where needed.


### Multilevel Inheritance
```java

```
# Understanding Multilevel Inheritance with Java Example

## Key Concepts

1. **Base Class - `User`**:
   - The foundational class that provides common properties and methods for all users.
   - **Attributes**:
     - `name`
     - `email`
   - **Methods**:
     - `setDetails(String n, String e)`
     - `displayIntro()`
     - `seeContent()`
     - `watchFreeVideos()`

2. **Intermediate Class - `PrimeUser`**:
   - Extends `User`, inheriting all properties and methods from `User`.
   - **Additional Attributes**:
     - `subscription`
     - `months`
   - **Additional Methods**:
     - `initData(int s, int m)`
     - `watchPremiumVideos()`
   - **Overridden Methods**:
     - `displayIntro()`: Provides specific information for prime users.

3. **Derived Class - `VipUser`**:
   - Extends `PrimeUser`, making it a subclass of both `PrimeUser` and `User`.
   - **Additional Methods**:
     - `watchLocationRestrictedContent()`
   - **Overridden Methods**:
     - `displayIntro()`: Provides specific information for VIP users.

## How Multilevel Inheritance Works

- **Class Hierarchy**:
  - The inheritance chain is:
    - `User` → `PrimeUser` → `VipUser`
  - `VipUser` inherits from `PrimeUser`, which inherits from `User`. This chain allows `VipUser` to access methods from both `PrimeUser` and `User`.

- **Method Overriding**:
  - Each class in the hierarchy can override methods from its parent class:
    - `PrimeUser` overrides `displayIntro()` from `User`.
    - `VipUser` further overrides `displayIntro()` to provide VIP-specific details.

- **Access to Methods**:
  - A `VipUser` object (`v1`) can call methods from all three classes:
    - **From `User`**:
      - `setDetails()`
      - `seeContent()`
      - `watchFreeVideos()`
    - **From `PrimeUser`**:
      - `displayIntro()`
      - `watchPremiumVideos()`
    - **From `VipUser`**:
      - `watchLocationRestrictedContent()`
  - A `User` object cannot access methods specific to `PrimeUser` or `VipUser`.

## Summary of the Execution Flow

- **User Object (`u1`)**:
  - Created to access common user features. It cannot access methods specific to `PrimeUser` or `VipUser`.

- **PrimeUser Object (`pu1`)**:
  - Created with additional prime features. It can access all `User` and `PrimeUser` methods but not those specific to `VipUser`.

- **VipUser Object (`v1`)**:
  - Created with features from `User`, `PrimeUser`, and additional VIP features. Demonstrates the full extent of multilevel inheritance by accessing all methods from the hierarchy.

This example illustrates how multilevel inheritance builds on a base class, adding complexity and functionality through intermediate and derived classes, promoting code reuse and hierarchical organization.

### Hierarchical Inheritance

