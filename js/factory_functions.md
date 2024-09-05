# Factory Function

## What is a Factory Function?
- A factory function is a function that creates and returns objects. It’s similar to how a real factory takes raw materials and produces a finished product, like a car. In programming, raw materials (parameters) go in, and an object comes out.

## Why Use Factory Functions?
- **Avoid Code Duplication**: When creating multiple similar objects, factory functions help avoid duplicating code.
- **Encapsulation**: Keeps data and methods encapsulated, preventing accidental modifications.
- **Simplicity**: Easier to read and manage compared to other design patterns like classes.

## Without Factory Functions

```
const me = {
    name: "Cena",
    talk: function() {
        return `Hello, I am ${this.name}`;
    }
};

const ben = {
    name: "Ben",
    talk: function() {
        return `Hello, I am ${this.name}`;
    }
};
console.log(me.talk()); // Hello, I am Cena
console.log(ben.talk()); // Hello, I am Ben
```

### Problems:

- **Code duplication**: talk function is written twice.
- **Risk of accidental modification**: me.name = "Sam" will disrupt me.talk() -> When we run run this it will print 'Sam' as name.

```
const me = {
    name: "Cena",
    talk: function() {
        return `Hello, I am ${this.name}`;
    }
};

const ben = {
    name: "Ben",
    talk: function() {
        return `Hello, I am ${this.name}`;
    }
};
me.name = "Sam"
console.log(me.talk()); // Hello, I am Sam
console.log(ben.talk()); // Hello, I am Ben
```

## With Factory Functions
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
const ben = personFactory("Ben");

console.log(me.talk()); // Hello, I am Cena
consoe.log(ben.talk()); // Hello, I am Ben
```

- Even if we try to modify the name - It won't be modified.

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
const ben = personFactory("Ben");

me.name ="Sam";

console.log(me.talk()); // Hello, I am Cena
consoe.log(ben.talk()); // Hello, I am Ben
```
### Advantages:

- **No code duplication**: talk function is written once.
- **Data encapsulation**: name is protected within the closure.

## Practical Example: Creating HTML Elements

```
function createElement(type, text, color) {
    const el = document.createElement(type);
    el.innerText = text;
    el.style.color = color;
    document.body.appendChild(el);

    return {
        el,
        setText: function(newText) {
            el.innerText = newText;
        },
        setColor: function(newColor) {
            el.style.color = newColor;
        }
    };
}

const h1 = createElement('h1', 'Hey guys', 'red');
const p = createElement('p', 'This is a paragraph', 'blue');

h1.setText('Goodbye fellas');
p.setColor('green');
```

## Benefits of Using Factory Functions
- **Simplicity**: Easy to understand and implement.
- **No Duplicate Code**: Centralizes common logic in one place.
- **Data Privacy**: Encapsulates data, reducing bugs.