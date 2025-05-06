function calculateTotal(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}

// Test cases
console.log(calculateTotal(1)); // Output: 1 (1)
console.log(calculateTotal(7)); // Output: 28 (7 + 6 + 5 + 4 + 3 + 2 + 1)
console.log(calculateTotal(0)); // Output: 0 (0)
