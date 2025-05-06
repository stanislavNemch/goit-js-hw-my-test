const fruits = ["apple", "plum", "pear", "orange", "banana"];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

// Test cases
console.log(firstTwoEls); // ["apple", "plum"]
console.log(nonExtremeEls); // ["plum", "pear", "orange"]
console.log(lastThreeEls); // ["pear", "orange", "banana"]
