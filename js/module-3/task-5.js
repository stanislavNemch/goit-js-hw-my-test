function getLastElementMeta(array) {
    return [array.length - 1, array[array.length - 1]];
}

// Test cases
console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // [3, "banana"]
console.log(getLastElementMeta(["apple", "peach", "pear"])); // [2, "pear"]
console.log(getLastElementMeta(["apple", "peach"])); // [1, "peach"]
console.log(getLastElementMeta(["apple"])); // [0, "apple"]
