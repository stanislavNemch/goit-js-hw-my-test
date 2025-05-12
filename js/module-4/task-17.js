function getAllPropValues(propName) {
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];

    const result = [];

    for (const product of products) {
        if (product[propName] !== undefined) {
            result.push(product[propName]);
        }
    }

    return result;
}

// Test cases
console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
console.log(getAllPropValues("category")); // []
