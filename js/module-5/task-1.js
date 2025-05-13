function makePizza() {
    return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;

// Test cases
console.log(result); // "Your pizza is being prepared, please wait."
console.log(pointer); // [Function: makePizza]
