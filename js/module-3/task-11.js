function checkForName(fullName, firstName) {
    return fullName.toLowerCase().includes(firstName.toLowerCase());
}

// Test cases
console.log(checkForName("Jason Neis", "Jason")); // true
console.log(checkForName("Jason Neis", "jAsOn")); // true
console.log(checkForName("Jason Neis", "Jacob")); // false
console.log(checkForName("Caty Stars", "Caty")); // true
console.log(checkForName("Caty Stars", "cAtY")); // true
console.log(checkForName("Caty Stars", "Andromeda")); // false
