function checkAccess(subType) {
    return subType === "pro" || subType === "vip";
}

// Test cases
console.log(checkAccess("pro")); // true
console.log(checkAccess("vip")); // true
console.log(checkAccess("starter")); // false
console.log(checkAccess("free")); // false
