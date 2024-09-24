## Sequential Programming

### Code
```
print("Taking order for customer 1")
order1 = "Cappuccino"
print(f"Preparing {order1}")
print(f"Serving {order1}")
print(f"Payment received for {order1}")
print("--------------------------------------------")

print("Taking order for customer 2")
order2 = "Latte"
print(f"Preparing {order2}")
print(f"Serving {order2}")
print(f"Payment received for {order2}")
print("--------------------------------------------")

print("Taking order for customer 3")
order3 = "Espresso"
print(f"Preparing {order3}")
print(f"Serving {order3}")
print(f"Payment received for {order3}")
print("--------------------------------------------")

print("Taking order for customer 4")
order4 = "Mocha"
print(f"Preparing {order4}")
print(f"Serving {order4}")
print(f"Payment received for {order4}")
print("--------------------------------------------")
```

### Output
```
Taking order for customer 1
Preparing Cappuccino
Serving Cappuccino
Payment received for Cappuccino
--------------------------------------------
Taking order for customer 2
Preparing Latte
Serving Latte
Payment received for Latte
--------------------------------------------
Taking order for customer 3
Preparing Espresso
Serving Espresso
Payment received for Espresso
--------------------------------------------
Taking order for customer 4
Preparing Mocha
Serving Mocha
Payment received for Mocha
--------------------------------------------
```

## Using Functions

### Naive Way

***CODE***
```
def process_customer(customer_number):
    print(f"Taking order for customer {customer_number}")
    coffee_type=input("Enter the coffee type: ")
    print(f"Preparing {coffee_type}")
    print(f"Serving {coffee_type}")
    print(f"Payment received for {coffee_type}")
    print("--------------------------------------------")

process_customer(1)
process_customer(2)
process_customer(3)
process_customer(4)
```
***OUTPUT***
```
Taking order for customer 1
Enter the coffee type: Mocha
Preparing Mocha
Serving Mocha
Payment received for Mocha
--------------------------------------------
Taking order for customer 2
Enter the coffee type: Espresso
Preparing Espresso
Serving Espresso
Payment received for Espresso
--------------------------------------------
Taking order for customer 3
Enter the coffee type: Latte
Preparing Latte
Serving Latte
Payment received for Latte
--------------------------------------------
Taking order for customer 4
Enter the coffee type: Capuccino
Preparing Capuccino
Serving Capuccino
Payment received for Capuccino
--------------------------------------------
```
### Better Way

***CODE***
```
def take_order(customer_number):
    print(f"Taking order for customer {customer_number}")
    return input("Enter the coffee type: ")

def prepare_coffee(coffee_type):
    print(f"Preparing {coffee_type}")

def serve_coffee(coffee_type):
    print(f"Serving {coffee_type}")

def handle_payment(coffee_type):
    print(f"Payment received for {coffee_type}")
    print("--------------------------------------------")

def process_customer(customer_number):
    order = take_order(customer_number)
    prepare_coffee(order)
    serve_coffee(order)
    handle_payment(order)

process_customer(1)
process_customer(2)
process_customer(3)
process_customer(4)
```

***OUTPUT***
```
Taking order for customer 1
Enter the coffee type: Capuccino
Preparing Capuccino
Serving Capuccino
Payment received for Capuccino
--------------------------------------------
Taking order for customer 2
Enter the coffee type: Mocha
Preparing Mocha
Serving Mocha
Payment received for Mocha
--------------------------------------------
Taking order for customer 3
Enter the coffee type: Latte
Preparing Latte
Serving Latte
Payment received for Latte
--------------------------------------------
Taking order for customer 4
Enter the coffee type: Espresso
Preparing Espresso
Serving Espresso
Payment received for Espresso
--------------------------------------------
```

## Benefits of Using Functions
1. **Modularity**:Each function handles a specific task, making the code more organized.Easier to manage and understand individual parts of the code.
2. **Reusability**:Functions can be reused across different parts of the program.Avoids code duplication, reducing the risk of errors.
3. **Maintainability**:Easier to update and maintain the code. If there's a change in the way a task is performed (e.g., how coffee is prepared), you only need to update the relevant function.
4. **Readability**: Code is more readable and self-explanatory.Functions with meaningful names provide context about what the code does.
5. **Debugging**:Easier to isolate and fix bugs within individual functions.Testing and debugging smaller units of code (functions) is simpler.