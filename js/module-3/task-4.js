function getOrderQuantity(order) {
    return order.length;
}

// Test cases
console.log(getOrderQuantity([])); // 0
console.log(getOrderQuantity(["apple", "peach", "pear", "banana"])); // 4
console.log(getOrderQuantity(["apple", "banana"])); // 2
console.log(getOrderQuantity(["apple", "banana", "pear"])); // 3
