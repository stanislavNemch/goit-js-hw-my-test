function getSlice(array, value) {
    const index = array.indexOf(value);
    if (index === -1) {
        return [];
    }
    return array.slice(0, index).concat(array[index]);
}

// Test cases
console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // ["Mango", "Poly"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // ["Mango", "Poly", "Ajax"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); // ["Mango"]
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); // []
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); // []
