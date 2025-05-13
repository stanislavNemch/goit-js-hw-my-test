function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
}

//Test cases
console.log(makeMessage("Royal Grand", makePizza)); // Pizza Royal Grand is being prepared, please wait...
console.log(makeMessage("Royal Grand", deliverPizza)); // Delivering Royal Grand pizza.
