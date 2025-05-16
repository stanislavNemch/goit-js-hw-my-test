const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    checkPizza(pizzaName) {
        return pizzas.includes(pizzaName);
    },
    order(pizzaName) {
        const isPizzaAvailable = checkPizza(pizzaName);

        if (!isPizzaAvailable) {
            return `Sorry, there is no pizza named «${pizzaName}»`;
        }

        return `Order accepted, preparing «${pizzaName}» pizza`;
    },
};
