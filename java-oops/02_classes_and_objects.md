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
		 car = new Vehicle()
	 ```
	- In Single
  
	 ```java
		 Vehicle car = new Vehicle()
	 ```
- We can call the methods and attributes using the object using dot operator.
	- `car.noOfWheels`
	- `car.drive()`

### Initialization of an Object
1. ***By Reference Variable***

```java
package oops;  

class Car{  
  
	// attributes  
	String typeOfCar;  
	String model;  
	int year;  
	String color;  
  
	// methods  
	int calculateAge(int y){  
		return (2024-y);  
	}  
}  
  
public class VehicleMain {  
	public static void main(String[] args) {  
		Car c1 = new Car();
		// Initialization using reference variable
		c1.typeOfCar="Jeep";  
		c1.model = "Thar";  
		c1.year = 2008;  
		c1.color = "Black";  
  
		System.out.println("-----Car Information-----");  
		System.out.println("Type: "+c1.typeOfCar+","+"Model: "+c1.model+","+"Year: "+c1.year+","+"Color: "+c1.color);  
		// Calling methods using object
		System.out.println("Age of the car: "+c1.calculateAge(c1.year));  
	}  
}
```
	 
   - This method is not so good. For ex. Let's say we have to create 5 objects. Then we have to repeat the initialization 5 times. So we can create a method for this.
	
1. ***By Methods***

``` java
package oops;  
  
class Car{  
  
    // attributes  
    String typeOfCar;  
    String model;  
    int year;  
    String color;  
  
    // methods  
    void initializeObject(String t,String m, int y, String c){  
        typeOfCar = t;  
        model = m;  
        year = y;  
        color = c;  
    }  
    void display(){  
        System.out.println("-----Car Information-----");  
        System.out.println("Type: "+typeOfCar+","+"Model: "+model+","+"Year: "+year+","+"Color: "+color);  
    }  
    int calculateAge(int y){  
        return (2024-y);  
    }  
}  
  
public class VehicleMain {  
    public static void main(String[] args) {  
        Car c1 = new Car();  
        // initialization using method  
        c1.initializeObject("Jeep","Thar",2008,"Black");  
        // calling display method  
        c1.display();  
        System.out.println("Age of the car: "+c1.calculateAge(c1.year));  
    }  
}
```

3. ***By Constructors***
	- It is a block similar to method having same name as that of a class name.
	- It does not have any return type, not even void.
	- It is used to initialize an object and 
	- The only modifiers applicable for constructors: *public*,*private*,*default*,*protected*
	- It executes automatically when we create an object.
	- Two ways to call constructor
		- `Test t = new Test()`
		- `new Test()` (No need to create reference variable)
	- Need for constructors
		- Without Constructor, when we create objects, default values are assigned which might become problematic.
		 ```java
			 package oops;  
  
			class Student{  
			  
			    // attributes  
			    String name;  
			    int admNo;  
			  
			    void display(){  
			        System.out.println("Name: "+name+","+"Admission No: "+admNo);  
			    }  
			}  
			  
			public class VehicleMain {  
			    public static void main(String[] args) {  
			        Student s1 = new Student();  
			        Student s2 = new Student();  
			        s1.display();  
			        s2.display();  
			    }  
			}
           ```
        - Output
	     ```
		     Name: null,Admission No: 0
			 Name: null,Admission No: 0
		   ```
