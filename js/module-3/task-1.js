function checkAge(age) {
    if (age >= 18) {
        return "You are an adult";
    } else {
        return undefined;
    }
}

// Test cases
console.log(checkAge(20)); // true
console.log(checkAge(17)); // undefined
console.log(checkAge(18)); // true
