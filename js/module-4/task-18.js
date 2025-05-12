function calculateTotalPrice(productName) {
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];

    for (const product of products) {
        if (product.name === productName) {
            return product.price * product.quantity;
        }
    }

    return `Product ${productName} not found!`;
}

// Test cases
console.log(calculateTotalPrice("Radar")); // 5200
console.log(calculateTotalPrice("Droid")); // 2800
console.log(calculateTotalPrice("Grip")); // 10800
console.log(calculateTotalPrice("Scanner")); // 8100
console.log(calculateTotalPrice("Engine")); // Product Engine not found!
