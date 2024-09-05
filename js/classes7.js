class Car {
  // Static property to track the number of cars produced
  static totalCarsProduced = 0;

  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;

    // Increment the total number of cars whenever a new car is created
    Car.totalCarsProduced++;
  }

  // Instance method to display car details
  displayDetails() {
    return `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
  }

  // Static method to get the total number of cars produced
  static getTotalCarsProduced() {
    return `Total cars produced: ${Car.totalCarsProduced}`;
  }
}

const car1 = new Car("Toyota Camry", 2022, "White");
const car2 = new Car("Honda Accord", 2023, "Black");

console.log(Car.getTotalCarsProduced()); // Output: Total cars produced: 2
