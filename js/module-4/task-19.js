const atTheOldToad = {
    potions: [],

    getPotions() {
        return "List of all available potions";
    },

    addPotion(potionName) {
        return `Adding ${potionName}`;
    },
};

// Test cases
console.log(atTheOldToad.getPotions()); // "List of all available potions"
console.log(atTheOldToad.addPotion("Speed potion")); // "Adding Speed potion"
