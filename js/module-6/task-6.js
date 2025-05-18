class Car {
    constructor(params) {
        this.brand = params.brand;
        this.model = params.model;
        this.price = params.price;
    }

    getPrice() {
        return this.price;
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }
}

// Test cases
const car1 = new Car({ brand: "Toyota", model: "Corolla", price: 20000 });
console.log(car1.getPrice()); // Output: 20000
car1.changePrice(22000);
console.log(car1.getPrice()); // Output: 22000
