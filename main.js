var pizza = {
    crust: "stuffed",
    cheese: "mozzarella",
    sauce: "marinara",
    addToppings: function () {
        console.log("Please add pepperoni and sausage");
        },
};

function orderPizza() {
    console.log(pizza.crust);
    console.log(pizza.cheese);
    console.log(pizza.sauce);
    pizza.addToppings();
};

orderPizza();