function getEvenNumbers(start, end) {
    const evenNumbers = [];

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

// Test cases
console.log(getEvenNumbers(2, 5)); // [2, 4]
console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)); // [8]
console.log(getEvenNumbers(7, 7)); // []
