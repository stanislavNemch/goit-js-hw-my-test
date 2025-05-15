const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
    { name: "Houston", score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax

const average = students.filter(
    (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston

//---------------------------------------------------------------------------------

const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// Test cases
console.log(topRatedBooks);
console.log(booksByAuthor);
