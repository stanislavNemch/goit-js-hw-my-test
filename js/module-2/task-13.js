function getFileName(file) {
    // Знаходимо індекс крапки в імені файлу
    const dotIndex = file.indexOf(".");

    // Якщо крапки немає, повертаємо ім'я файлу без змін
    if (dotIndex === -1) {
        return file;
    }

    // Якщо крапка є, повертаємо підрядок до крапки
    return file.slice(0, dotIndex);
}

// Приклади використання
console.log(getFileName("styles.css")); // "styles"
console.log(getFileName("app.js")); // "app"
console.log(getFileName("styles")); // "styles"
console.log(getFileName("app")); // "app"
