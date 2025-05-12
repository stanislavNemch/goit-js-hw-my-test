const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Stone skin", price: 520 },
    ],
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        this.potions.push(newPotion);
    },
    getTotalPrice() {
        let totalPrice = 0;

        for (let potion of this.potions) {
            totalPrice += potion.price;
        }

        return totalPrice;
    },
};

// Test cases
console.log(atTheOldToad.getTotalPrice()); // 980
console.log(atTheOldToad.getPotions()); // [ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]
atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
console.log(atTheOldToad.getTotalPrice()); // 1600
console.log(atTheOldToad.getPotions()); // [ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 }, { name: 'Invisibility', price: 620 } ]
