function createReversedArray() {
    const args = Array.from(arguments);
    const array = [];
    for (const arg of args) {
        array.push(arg);
    }
    return array.reverse();
}

// Test cases
console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
console.log(createReversedArray(164, 48, 291)); // [291, 48, 164]
console.log(createReversedArray(412, 371, 94, 63, 176)); // [176, 63, 94, 371, 412]
