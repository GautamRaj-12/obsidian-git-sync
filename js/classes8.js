class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    // Call the parent class constructor
    super(make, model, year);
    this.numDoors = numDoors;
  }

  // Override the displayInfo method to include the number of doors
  displayInfo() {
    return `${super.displayInfo()}, Doors: ${this.numDoors}`;
  }

  // Additional method specific to Car
  honk() {
    return "Honk! Honk!";
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, hasSidecar) {
    // Call the parent class constructor
    super(make, model, year);
    this.hasSidecar = hasSidecar;
  }

  // Override the displayInfo method to include sidecar information
  displayInfo() {
    return `${super.displayInfo()}, Sidecar: ${this.hasSidecar ? "Yes" : "No"}`;
  }

  // Additional method specific to Motorcycle
  revEngine() {
    return "Vroom Vroom!";
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, numDoors, batteryCapacity) {
    // Call the parent class constructor
    super(make, model, year, numDoors);
    this.batteryCapacity = batteryCapacity;
  }

  // Override the displayInfo method to include battery capacity
  displayInfo() {
    return `${super.displayInfo()}, Battery Capacity: ${
      this.batteryCapacity
    } kWh`;
  }

  // Additional method specific to ElectricCar
  charge() {
    return "Charging the electric car...";
  }
}

// Create an instance of Vehicle
const vehicle = new Vehicle("Toyota", "Corolla", 2022);
console.log(vehicle.displayInfo()); // Output: 2022 Toyota Corolla

// Create an instance of Car
const car = new Car("Honda", "Civic", 2023, 4);
console.log(car.displayInfo()); // Output: 2023 Honda Civic, Doors: 4
console.log(car.honk()); // Output: Honk! Honk!

// Create an instance of Motorcycle
const motorcycle = new Motorcycle("Harley-Davidson", "Iron 883", 2024, false);
console.log(motorcycle.displayInfo()); // Output: 2024 Harley-Davidson Iron 883, Sidecar: No
console.log(motorcycle.revEngine()); // Output: Vroom Vroom!

// Create an instance of ElectricCar
const electricCar = new ElectricCar("Tesla", "Model 3", 2024, 4, 75);
console.log(electricCar.displayInfo()); // Output: 2024 Tesla Model 3, Doors: 4, Battery Capacity: 75 kWh
console.log(electricCar.honk()); // Output: Honk! Honk! (Inherits from Car)
console.log(electricCar.charge()); // Output: Charging the electric car...
