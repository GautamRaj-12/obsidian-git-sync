# Contructor Functions

- Constructor functions get their name from the constructor functions you get inside classes in object-oriented languages. Every time you create an instance of a class, the constructor function is the first thing that gets executed. But since JavaScript didn't have classes for a very long time, it needed the same sort of functionality. That's where the name comes from. So, we get the constructor function without the class itself.

## What is a Constructor Function?
- A constructor function is just a function that creates objects for us. That's it. It's very similar to factory functions that we talked about in the last episode.

- If you're making lots of objects with similar properties or functionality, the process can become repetitive quickly. Let's see how we can make this better using constructor functions.

## Example: Creating Objects with Constructor Functions

### Problem with code duplication

```
const me = {
    name: "Cena",
    talk: function() {
        return `Hello, I am ${this.name}`;
    }
};

const poli = {
    name: "Poli",
    talk: function() {
        return `Hello, I am ${this.name}`;
    }
};
```

### Using a factory function

```
function personFactory(name) {
    return {
        name: name,
        talk: function() {
            return `Hello, I am ${name}`;
        }
    };
}

const me = personFactory("Cena");
const poli = personFactory("Poli");

me.talk(); // Hello, I am Cena
poli.talk(); // Hello, I am Poli
```

### Using constructor functions

- Another way to fix this is using a constructor function. Unlike factory functions, constructors don't return the object to you. Instead, the magical `new` keyword is involved, and the mysterious this keyword does some magic.

```
function Person(name) {
    this.name = name;
    this.talk = function() {
        return `Hello, I am ${this.name}`;
    };
}

const cena = new Person("Cena");
const poli = new Person("Poli");

cena.talk(); // Hello, I am Cena
poli.talk(); // Hello, I am Poli
```

- On the inside the above code works like the following:

```
function Person(name) {
    this = {}
    this.name = name;
    this.talk = function() {
        return `Hello, I am ${this.name}`;
    };
    return this
}

const cena = new Person("Cena");
const poli = new Person("Poli");

cena.talk(); // Hello, I am Cena
poli.talk(); // Hello, I am Poli
```

***With constructor functions:***

- **No code duplication**: The talk function is not repeated.
- **Automatic object creation**: The new keyword handles creating and returning the object.
