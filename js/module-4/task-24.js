function addOverNum(value, ...args) {
    let total = 0;

    for (const num of args) {
        if (num > value) {
            total += num;
        }
    }

    return total;
}

// Test cases
console.log(addOverNum(50, 15, 27)); // 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 12 + 11 + 48 = 71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 32 + 19 = 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // 74 + 62 + 46 + 36 = 218
