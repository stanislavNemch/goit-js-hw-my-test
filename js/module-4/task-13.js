const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys); // ["descr", "rating", "price"]
console.log(values); // ["Spacious apartment in the city center", 4, 2153]
