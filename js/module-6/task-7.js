class Car {
    #brand;

    constructor(params) {
        this.#brand = params.brand;
        this.model = params.model;
        this.price = params.price;
    }

    getBrand() {
        return this.#brand;
    }

    changeBrand(newBrand) {
        this.#brand = newBrand;
    }

    getPrice() {
        return this.price;
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }
}

// Test cases
const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(car1); // Car { model: 'Q3', price: 36000 }
console.log(car1.getBrand()); // Audi
car1.changeBrand("Mercedes");
console.log(car1.getBrand()); // Mercedes
const car2 = new Car({ brand: "bmw", model: "X5", price: 58900 });
console.log(car2); // Car { brand: 'bmw', model: 'X5', price: 58900 }
console.log(car2.getBrand()); // bmw
car2.changeBrand("BMW");
console.log(car2.getBrand()); // BMW
const car3 = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
console.log(car3); // Car { brand: 'Nissan', model: 'Murano', price: 31700 }
console.log(car3.getBrand()); // Nissan
car3.changeBrand("NissaN");
console.log(car3.getBrand()); // NissaN
