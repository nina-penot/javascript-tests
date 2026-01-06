// const food_items = {
//     "strawberry": {
//         "container": new FoodBasket(new FoodElement("strawberry", "./assets/sprites/foods/strawberry.png"), "./assets/sprites/baskets/strawberry_basket.png"),
//         "food": "",
//     },
//     "sugar": {
//         "container": new FoodBasket(new FoodElement("sugar", "./assets/sprites/foods/sugar.png"), "./assets/sprites/baskets/sugar_bag.png"),
//         "food": "",
//     }
// }

const food_items = {
    "strawberry": {
        "container": {
            "img": "./assets/sprites/baskets/strawberry_basket.png",
            "name": "strawberry basket",
        },
        "food": {
            "img": "./assets/sprites/foods/strawberry.png",
            "name": "strawberry",
            "tags": ["sweet", "fruit"],
        },
    },
    "sugar": {
        "container": {
            "img": "./assets/sprites/baskets/sugar_bag.png",
            "name": "sugar bag",
        },
        "food": {
            "img": "./assets/sprites/foods/sugar.png",
            "name": "sugar",
            "tags": ["sweet"],
        },
    }
}