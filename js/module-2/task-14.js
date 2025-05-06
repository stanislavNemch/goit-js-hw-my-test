function createFileName(name, ext) {
    // Видаляємо зайві пробіли з name і формуємо повне ім'я файлу
    return `${name.trim()}.${ext}`;
}

// Приклади використання
console.log(createFileName("order ", "txt")); // "order.txt"
console.log(createFileName(" finance ", "xml")); // "finance.xml"
console.log(createFileName("report", "pdf")); // "report.pdf"
