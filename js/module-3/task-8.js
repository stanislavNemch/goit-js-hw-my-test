function calculateEngravingPrice(message, pricePerWord) {
    return message.split(" ").length * pricePerWord;
}

// Test cases
console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50
console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // 100
console.log(calculateEngravingPrice("Web-development is creative work", 40)); // 160
console.log(calculateEngravingPrice("Web-development is creative work", 20)); // 80
