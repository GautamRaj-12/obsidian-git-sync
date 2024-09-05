class Rectangle {
  // Define private fields
  #width;
  #height;
  #color;

  constructor(width, height, color) {
    this.#width = width;
    this.#height = height;
    this.#color = color;
  }

  // Getter for width
  get width() {
    return this.#width;
  }

  // Setter for width
  set width(value) {
    if (value <= 0) {
      console.log("Width must be positive.");
    } else {
      this.#width = value;
    }
  }

  // Getter for height
  get height() {
    return this.#height;
  }

  // Setter for height
  set height(value) {
    if (value <= 0) {
      console.log("Height must be positive.");
    } else {
      this.#height = value;
    }
  }

  // Getter for color
  get color() {
    return this.#color;
  }

  // Setter for color
  set color(value) {
    this.#color = value;
  }
}

let myRectangle = new Rectangle(3, 5, "red");

// Accessing properties using getters
console.log("Width:", myRectangle.width); // 3
console.log("Height:", myRectangle.height); // 5
console.log("Color:", myRectangle.color); // red

// Modifying properties using setters
myRectangle.width = 10;
myRectangle.height = -2; // This will trigger a validation message
myRectangle.color = "blue";

// Accessing modified properties
console.log("New Width:", myRectangle.width); // 10
console.log("New Height:", myRectangle.height); // 5 (unchanged due to validation)
console.log("New Color:", myRectangle.color); // blue

// Trying to access private fields directly will result in an error
// console.log(myRectangle.#width); // SyntaxError: Private field '#width' must be declared in an enclosing class
