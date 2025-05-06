function calculateTotal(number) {
    let totalSum = 0;
    while (number >= 0) {
        totalSum += number;
        number--;
    }
    return totalSum;
}

// Test cases
console.log(calculateTotal(1)); // Output: 1 (1)
console.log(calculateTotal(3)); // Output: 6 (3 + 2 + 1)
console.log(calculateTotal(0)); // Output: 0 (0)
