// function spawn_item(e) {
//     let food_item = easy_quick_create("div", "food_item");
//     document.body.insertBefore(food_item, document.body.firstChild);

//     mouse_x = e.clientX;
//     mouse_y = e.clientY;
//     fd_width = food_item.getBoundingClientRect().width;
//     fd_height = food_item.getBoundingClientRect().height;

//     food_item.style.position = "fixed";
//     food_item.style.left = (mouse_x - fd_width / 2) + "px";
//     food_item.style.top = (mouse_y - fd_height / 2) + "px";

//     easy_drag_item_mouse_free(food_item);
//     let msdown = new Event("mousedown")
//     food_item.dispatchEvent(msdown);
//     food_item.addEventListener("mouseup", function cauldron_check(e) {
//         if (easy_collide_check(food_item, cauldron)) {
//             //console.log("on cauldron...");
//             //add to the cauldron slots
//             for (i = 0; i < inventory.children.length; i++) {
//                 if (inventory.children[i].children.length == 0) {
//                     easy_append_children(inventory.children[i], food_item);
//                     food_item.removeAttribute("style");
//                     easy_remove_all_events(food_item);
//                     break;
//                 }
//             }
//             food_item.remove();
//         } else {
//             food_item.remove();
//         }
//     });
// }

let countdown;
function timed_clear_result() {
    mytime = 1000 * 3;
    countdown = window.setTimeout(() => {
        result_text_intro.innerHTML = "";
        result_text.innerHTML = "";
        console.log(countdown);
    }, mytime);
}

function clear_ingredients() {
    for (i = 0; i < inventory.children.length; i++) {
        inventory.children[i].innerHTML = "";
    }
}

function cook() {
    let my_ingredients = []
    for (i = 0; i < inventory.children.length; i++) {
        if (inventory.children[i].children.length) {
            //console.log(inventory.children[i].firstChild.dataset.name);
            my_ingredients.push(inventory.children[i].firstChild.dataset.name);
        }
    }

    if (!my_ingredients.length) {
        console.log("No ingredients!");
    } else {
        //console.log(my_ingredients);
        let ingr_count = count_array_elements(my_ingredients);
        let recipe = "";
        for (a in recipes) {
            if (are_object_equal(recipes[a], ingr_count)) {
                recipe = a;
                break;
            }
        }
        if (recipe) {
            console.log("You cooked " + recipe + "!");
            result_text_intro.textContent = "You cooked:";
            result_text.textContent = recipe + "!";
        } else {
            console.log("No recipe found...");
            result_text_intro.textContent = "No recipe found... :(";
        }
        clear_ingredients();
        clearTimeout(countdown);
        timed_clear_result();
    }
}

//Behavior for basket of food:
//When mousedown, make a food item
//That food item uses free drag behavior
//If dropped outside cauldron, delete it
// const food_basket = easy_class_get("food_basket");

//Behavior for cauldron:
//Has an array of 5 slots
//When food dropped on it, add it to slot
//When all slots filled, stop accepting food
//Button allows mix of all foods
//Makes a food depending on ingredients

//All elements
const food_cont = easy_class_get("food_cont"),
    cauldron = easy_class_get("cauldron"),
    inventory = easy_class_get("cauldron_inv"),
    result_text = easy_id_get("result"),
    result_text_intro = easy_id_get("result_intro"),
    result_plate = easy_id_get("result_plate");

// food_basket.addEventListener("mousedown", spawn_item);

for (i in food_items) {
    let basket_create = easy_quick_create("img", "food_basket");
    //basket_create.src = food_items[i]["container"].img;
    basket_create.src = food_items[i]["container"]["img"];
    basket_create.setAttribute("draggable", false);
    basket_create.dataset.name = i;
    basket_create.addEventListener("mousedown", (e) => {
        e.preventDefault();
        let food_item = easy_quick_create("img");
        // food_item.src = food_items[basket_create.dataset.name]["container"].food.img;
        food_item.src = food_items[basket_create.dataset.name]["food"]["img"];
        food_item.setAttribute("draggable", false);
        // food_item.dataset.name = basket_create.dataset.name;
        food_item.dataset.name = food_items[basket_create.dataset.name]["food"]["name"];
        document.body.insertBefore(food_item, document.body.firstChild);

        mouse_x = e.clientX;
        mouse_y = e.clientY;

        food_item.onload = function () {
            fd_width = food_item.width;
            fd_height = food_item.height;
            //console.log(food_item.getBoundingClientRect());

            //console.log(food_item);
            //console.log("x" + mouse_x + "y" + mouse_y + " " + "item:" + fd_width + "/" + fd_height);

            food_item.style.position = "fixed";
            food_item.style.left = (mouse_x - fd_width / 2) + "px";
            food_item.style.top = (mouse_y - fd_height / 2) + "px";
        };

        easy_drag_item_mouse_free(food_item);

        let msdown = new Event("mousedown")
        food_item.dispatchEvent(msdown);

        function cauldron_check(e) {
            //console.log("mouseup")
            e.preventDefault();
            if (easy_collide_check(food_item, cauldron)) {
                //console.log("on cauldron...");
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
            document.removeEventListener("mouseup", cauldron_check);
        }

        // food_item.addEventListener("mouseup", function cauldron_check(e) {
        //     console.log("mouseup")
        //     e.preventDefault();
        //     if (easy_collide_check(food_item, cauldron)) {
        //         //console.log("on cauldron...");
        //         //add to the cauldron slots
        //         for (i = 0; i < inventory.children.length; i++) {
        //             if (inventory.children[i].children.length == 0) {
        //                 easy_append_children(inventory.children[i], food_item);
        //                 food_item.removeAttribute("style");
        //                 easy_remove_all_events(food_item);
        //                 break;
        //             }
        //         }
        //         food_item.remove();
        //     } else {
        //         food_item.remove();
        //     }
        // });*
        food_item.addEventListener("mouseup", cauldron_check);

        food_item.addEventListener("mouseleave", (e) => {
            //console.log("mouse left!");
            document.addEventListener("mouseup", cauldron_check);
        })
    });
    easy_append_children(food_cont, basket_create);
    //console.log(basket_create);
}