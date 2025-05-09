const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
};

const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];

console.log(aptRating); // 4
console.log(aptDescr); // "Spacious apartment in the city center"
console.log(aptPrice); // 2153
console.log(aptTags); // ["premium", "promoted", "top"]
