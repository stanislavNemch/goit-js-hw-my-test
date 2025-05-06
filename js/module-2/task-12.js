function checkFileExtension(fileName, ext) {
    return fileName.endsWith(ext)
        ? "File extension matches"
        : "File extension does not match";
}

// Test cases
console.log(checkFileExtension("styles.css", ".css")); // File extension matches
console.log(checkFileExtension("styles.css", ".js")); // File extension does not match
console.log(checkFileExtension("app.js", ".js")); // File extension matches
console.log(checkFileExtension("app.js", ".html")); // File extension does not match
