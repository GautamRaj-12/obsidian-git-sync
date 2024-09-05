class Rectangle {
  constructor(width, height, color) {
    console.log("The rectangle is being created");
    this.width = width;
    this.height = height;
    this.color = color;
  }
  calcArea() {
    return this.width * this.height;
  }
  printDesc() {
    return `I am rectangle of length: ${this.height} and width: ${this.width}`;
  }
}
let myRectangle1 = new Rectangle(3, 5, "red");
console.log("Rectangle 1's area: ", myRectangle1.calcArea());
console.log("Rectangle 1's description: ", myRectangle1.printDesc());
let myRectangle2 = new Rectangle(9, 7, "blue");
console.log("Rectangle 2's area: ", myRectangle2.calcArea());
console.log("Rectangle 2's description: ", myRectangle2.printDesc());
