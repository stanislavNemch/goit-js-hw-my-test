const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (const key of keys) {
    values.push(apartment[key]);
}

console.log(values); // [ 'Spacious apartment in the city center', 4, 2153 ]
console.log(keys); // [ 'descr', 'rating', 'price' ]
