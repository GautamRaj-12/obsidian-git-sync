class Rectangle {
  constructor() {
    console.log("The rectangle is being created");
    this.width = 3;
    this.height = 2;
    this.color = "red";
  }
}
let myRectangle1 = new Rectangle();
console.log("Rectangle 1's width: ", myRectangle1.width);
console.log("Rectangle 1's length: ", myRectangle1.height);
console.log("Rectangle 1's color: ", myRectangle1.color);
let myRectangle2 = new Rectangle();
console.log("Rectangle 2's width: ", myRectangle2.width);
console.log("Rectangle 2's length: ", myRectangle2.height);
console.log("Rectangle 2's color: ", myRectangle2.color);
