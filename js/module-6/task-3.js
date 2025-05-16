const ancestor = {
    name: "Paul",
    age: 83,
    surname: "Dawson",
    heritage: "Irish",
};

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

console.log(child.name); // Jason
console.log(child.surname); // Moore
console.log(child.age); // 27
console.log(child.heritage); // Irish
console.log(parent.name); // Stacey
console.log(parent.surname); // Moore
console.log(parent.age); // 54
console.log(parent.heritage); // Irish
