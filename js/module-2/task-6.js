function isNumberInRange(start, end, number) {
    return number >= start && number <= end;
}

// Test cases
console.log(isNumberInRange(10, 30, 17)); // true
console.log(isNumberInRange(10, 30, 5)); // false
console.log(isNumberInRange(20, 50, 24)); // true
console.log(isNumberInRange(20, 50, 76)); // false
