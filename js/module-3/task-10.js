function normalizeInput(input, to) {
    if (to === "lower") {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}

// Test cases
console.log(normalizeInput("This ISN'T SpaM", "lower")); // Expected output: "this isn't spam"
console.log(normalizeInput("This ISN'T SpaM", "upper")); // Expected output: "THIS ISN'T SPAM"
console.log(normalizeInput("Big SALE", "lower")); // Expected output: "big sale"
console.log(normalizeInput("Big SALE", "upper")); // Expected output: "BIG SALE"
console.log(normalizeInput("Stay Awhile and Listen", "lower")); // Expected output: "stay awhile and listen"
console.log(normalizeInput("Stay Awhile and Listen", "upper")); // Expected output: "STAY AWHILE AND LISTEN"
