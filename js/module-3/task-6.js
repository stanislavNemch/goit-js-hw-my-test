function getExtremeElements(array) {
    return [array[0], array[array.length - 1]];
}

// Test cases
console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // ["Earth", "Venus"]
console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); // ["apple", "banana"]
