function checkPassword(password) {
    const correctPassword = "jqueryismyjam";
    return password === correctPassword
        ? "Access granted"
        : "Access denied, wrong password!";
}

// Test cases
console.log(checkPassword("jqueryismyjam")); // Output: "Access granted"
console.log(checkPassword("angul4r1sl1f3")); // Output: "Access denied, wrong password!"
console.log(checkPassword("r3actsux")); // Output: "Access denied, wrong password!"
