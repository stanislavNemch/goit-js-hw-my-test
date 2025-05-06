function calculateEvenTotal(number) {
    let total = 0;
    for (let i = 0; i <= number; i += 2) {
        total += i;
    }
    return total;
}

// Test cases
console.log(calculateEvenTotal(3)); // 6
console.log(calculateEvenTotal(7)); // 12
console.log(calculateEvenTotal(0)); // 0
console.log(calculateEvenTotal(1)); // 0
