const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map((planet) => planet.length);

// Test cases
console.log(planetsLengths); // [5, 4, 5, 7]

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
