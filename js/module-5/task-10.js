function changeEven(numbers, value) {
    const newArray = [];

    numbers.forEach((number) => {
        if (number % 2 === 0) {
            newArray.push(number + value); // Изменяем четные числа
        } else {
            newArray.push(number); // Оставляем нечетные числа без изменений
        }
    });

    return newArray;
}

// Test cases
console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]
