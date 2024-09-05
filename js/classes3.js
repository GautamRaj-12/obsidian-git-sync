class Rectangle {
  constructor(width, height, color) {
    console.log("The rectangle is being created");
    this.width = width;
    this.height = height;
    this.color = color;
  }
}
let myRectangle1 = new Rectangle(3, 5, "red");
console.log("Rectangle 1's width: ", myRectangle1.width);
console.log("Rectangle 1's length: ", myRectangle1.height);
console.log("Rectangle 1's color: ", myRectangle1.color);
let myRectangle2 = new Rectangle(9, 7, "blue");
console.log("Rectangle 2's width: ", myRectangle2.width);
console.log("Rectangle 2's length: ", myRectangle2.height);
console.log("Rectangle 2's color: ", myRectangle2.color);
