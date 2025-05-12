const atTheOldToad = {
    potions: ["Speed potion", "Stone skin"],
    getPotions() {
        return this.potions;
    },
    addPotion(potionName) {
        this.potions.push(potionName);
    },
};

// Test cases
console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin"]
atTheOldToad.addPotion("Invisibility potion");
console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin", "Invisibility potion"]
