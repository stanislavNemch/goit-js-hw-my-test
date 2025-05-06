function getSubstring(string, length) {
    if (string.length <= length) {
        return string;
    }
    return string.slice(0, length);
}

// Test cases
console.log(getSubstring("Hello world", 3)); // Expected output: "Hel"
console.log(getSubstring("Hello world", 5)); // Expected output: "Hello"
console.log(getSubstring("Hello world", 8)); // Expected output: "Hello wo"
console.log(getSubstring("Hello world", 11)); // Expected output: "Hello world"
console.log(getSubstring("Hello world", 0)); // Expected output: ""
