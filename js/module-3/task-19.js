function calculateTax(amount, taxRate = 0.2) {
    return amount * taxRate;
}

// Test cases
console.log(calculateTax(100, 0.1)); // 10
console.log(calculateTax(200, 0.1)); // 20
console.log(calculateTax(100, 0.2)); // 20
console.log(calculateTax(200, 0.2)); // 40
console.log(calculateTax(100, 0.3)); // 30
console.log(calculateTax(200, 0.3)); // 60
console.log(calculateTax(100)); // 20
console.log(calculateTax(200)); // 40
