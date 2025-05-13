const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;

    orderedItems.forEach((item) => {
        totalPrice += item;
    });

    return totalPrice;
};

// Test cases
console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
console.log(calculateTotalPrice([164, 48, 291])); // 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
