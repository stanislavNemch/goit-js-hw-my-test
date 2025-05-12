const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

// Об'єднуємо всі результати в один масив
const allScores = [
    ...firstGroupScores,
    ...secondGroupScores,
    ...thirdGroupScores,
];

// Знаходимо найвищий і найнижчий бали
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// Test cases
console.log(bestScore); // 97
console.log(worstScore); // 14
