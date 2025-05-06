function checkStorage(storage, item) {
    return storage.includes(item.toLowerCase())
        ? `${item.toLowerCase()} is available to order!`
        : "Sorry! We are out of stock!";
}

// Test cases
console.log(checkStorage(["apple", "plum", "pear"], "plum")); // "plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); // "plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pear")); // "pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); // "pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "orange")); // "Sorry! We are out of stock!"
console.log(checkStorage(["apple", "plum", "pear"], "carrot")); // "Sorry! We are out of stock!"
