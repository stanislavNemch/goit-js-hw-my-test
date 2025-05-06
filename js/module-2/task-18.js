function letNuber(start, end) {
    let number = 0;
    for (let i = start; i <= end; i++) {
        if (i % 5 === 0) {
            number = i;
            break;
        }
    }
    return number;
}

// Test cases
console.log(letNuber(6, 17)); // 10
console.log(letNuber(17, 25)); // 20
console.log(letNuber(2, 11)); // 5
