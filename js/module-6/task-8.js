class Car {
    #brand;
    #model;
    #price;

    constructor(params) {
        this.#brand = params.brand;
        this.#model = params.model;
        this.#price = params.price;
    }

    get brand() {
        return this.#brand;
    }

    set brand(newBrand) {
        this.#brand = newBrand;
    }

    get model() {
        return this.#model;
    }

    set model(newModel) {
        this.#model = newModel;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        this.#price = newPrice;
    }
}

// Test cases
const car1 = new Car({ brand: "Toyota", model: "Corolla", price: 20000 });
console.log(car1.brand); // Output: Toyota
console.log(car1.model); // Output: Corolla
console.log(car1.price); // Output: 20000
car1.brand = "Honda";
car1.model = "Civic";
car1.price = 25000;
console.log(car1.brand); // Output: Honda
console.log(car1.model); // Output: Civic
console.log(car1.price); // Output: 25000
