function spawn_item(e) {
    let food_item = easy_quick_create("div", "food_item");
    document.body.insertBefore(food_item, document.body.firstChild);

    mouse_x = e.clientX;
    mouse_y = e.clientY;
    fd_width = food_item.getBoundingClientRect().width;
    fd_height = food_item.getBoundingClientRect().height;

    food_item.style.position = "fixed";
    food_item.style.left = (mouse_x - fd_width / 2) + "px";
    food_item.style.top = (mouse_y - fd_height / 2) + "px";

    easy_drag_item_mouse_free(food_item);
    let msdown = new Event("mousedown")
    food_item.dispatchEvent(msdown);
    food_item.addEventListener("mouseup", function cauldron_check(e) {
        if (easy_collide_check(food_item, cauldron)) {
            console.log("on cauldron...");
            //add to the cauldron slots
            for (i = 0; i < inventory.children.length; i++) {
                if (inventory.children[i].children.length == 0) {
                    easy_append_children(inventory.children[i], food_item);
                    food_item.removeAttribute("style");
                    easy_remove_all_events(food_item);
                    break;
                }
            }
            food_item.remove();
        } else {
            food_item.remove();
        }
    });
}

function clear_ingredients() {
    for (i = 0; i < inventory.children.length; i++) {
        inventory.children[i].innerHTML = "";
    }
}

//Behavior for basket of food:
//When mousedown, make a food item
//That food item uses free drag behavior
//If dropped outside cauldron, delete it
const food_basket = easy_class_get("food_basket");
const cauldron = easy_class_get("cauldron");
const inventory = easy_class_get("cauldron_inv");

food_basket.addEventListener("mousedown", spawn_item);

//Behavior for cauldron:
//Has an array of 5 slots
//When food dropped on it, add it to slot
//When all slots filled, stop accepting food
//Button allows mix of all foods
//Makes a food depending on ingredients