function createArrayOfNumbers(min, max) {
    const tags = [];

    for (let i = min; i <= max; i++) {
        tags.push(i);
    }

    return tags;
}

// Test cases
console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]
