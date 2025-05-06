function checkStorage(available, ordered) {
    if (available >= ordered) {
        return "Order is processed, our manager will contact you";
    } else {
        return "Not enough goods in stock!";
    }
}

// Testing the function
console.log(checkStorage(100, 50)); // "Order is processed, our manager will contact you"
console.log(checkStorage(100, 130)); // "Not enough goods in stock!"
console.log(checkStorage(200, 20)); // "Order is processed, our manager will contact you"
console.log(checkStorage(200, 200)); // "Order is processed, our manager will contact you"
