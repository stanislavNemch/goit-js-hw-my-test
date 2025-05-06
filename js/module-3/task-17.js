function calculateTotalPrice(order) {
    let total = 0;
    for (const number of order) {
        total += number;
    }
    return total;
}

// Test cases
console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
console.log(calculateTotalPrice([164, 48, 291])); // 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
