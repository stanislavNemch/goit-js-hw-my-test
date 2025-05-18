class Car {
    constructor(params) {
        this.brand = params.brand;
        this.model = params.model;
        this.price = params.price;
    }
}

// Test cases
const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(car1); // { brand: "Audi", model: "Q3", price: 36000 }
const car2 = new Car({ brand: "BMW", model: "X5", price: 58900 });
console.log(car2); // { brand: "BMW", model: "X5", price: 58900 }
const car3 = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
console.log(car3); // { brand: "Nissan", model: "Murano", price: 31700 }
