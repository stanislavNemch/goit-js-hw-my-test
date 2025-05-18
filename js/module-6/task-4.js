class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}

// Test cases
const car1 = new Car("Audi", "Q3", 36000);
console.log(car1); // Audi, Q3, 36000
const car2 = new Car("BMW", "X5", 58900);
console.log(car2); // BMW, X5, 58900
const car3 = new Car("Nissan", "Murano", 31700);
console.log(car3); // Nissan, Murano, 31700
