function add(...args) {
    let totalSum = 0;
    for (let arg of args) {
        totalSum += arg;
    }
    return totalSum;
}

// Test cases
console.log(add(15, 27)); // 42
console.log(add(12, 4, 11, 48)); // 75
console.log(add(32, 6, 13, 19, 8)); // 78
