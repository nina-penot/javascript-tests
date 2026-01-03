class FoodElement {
    constructor(name, img) {
        this.name = name;
        this.img = img;
        this.elem = easy_quick_create("img");
        this.elem.src = this.img;
    }
}

class FoodBasket {
    constructor(food, img) {
        this.food = food;
        this.img = img;
        this.elem = easy_quick_create("img");
        this.elem.src = this.img;
    }

    spawn_an_item() {
        let elem = this.food.elem;
    }
}