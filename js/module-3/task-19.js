function findNumber(start, end, divisor) {
    for (let i = start; i <= end; i++) {
        if (i % divisor === 0) {
            return i;
        }
    }
}

// Test cases
console.log(findNumber(2, 6, 5)); // 5
console.log(findNumber(8, 17, 3)); // 9
console.log(findNumber(6, 9, 4)); // 8
console.log(findNumber(16, 35, 7)); // 21
