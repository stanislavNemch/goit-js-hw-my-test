function getLength(array) {
    return array.join("").length;
}

// Test cases
console.log(getLength(["Mango", "hurries", "to", "the", "train"])); // 22
console.log(getLength(["M", "a", "n", "g", "o"])); // 5
console.log(getLength(["top", "picks", "for", "you"])); // 114
