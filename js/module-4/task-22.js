const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Stone skin", price: 520 },
    ],
    getPotions() {
        return this.potions;
    },
    updatePotionName(oldName, newName) {
        for (let potion of this.potions) {
            if (potion.name === oldName) {
                potion.name = newName;
            }
        }
    },
};

// Test cases
console.log(atTheOldToad.getPotions()); // Returns the potions array
atTheOldToad.updatePotionName("Stone skin", "Invisibility"); // Updates the potion name
console.log(atTheOldToad.getPotions()); // Returns the updated potions array
atTheOldToad.updatePotionName("Speed potion", "Polymorth"); // Updates the potion name
console.log(atTheOldToad.getPotions()); // Returns the updated potions array
