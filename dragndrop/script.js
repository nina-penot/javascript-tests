const get_ball = easy_class_get("drag_elem");
const get_slots = easy_class_get("slot");
const drag_slot_style = "background-color:red; width: 100px;"
const get_free_drag = easy_class_get("drag_elem_free");
const get_limited_drag = easy_class_get("drag_elem_limited");

if (NodeList.prototype.isPrototypeOf(get_ball)) {
    get_ball.forEach(ball => {
        easy_drag_item(ball);
    })
} else {
    easy_drag_item(get_ball);
}

get_slots.forEach(slot => {
    easy_drag_slot(slot, drag_slot_style);
});

if (NodeList.prototype.isPrototypeOf(get_free_drag)) {
    get_free_drag.forEach(free => {
        easy_drag_item_mouse_free(free);
    })
} else {
    easy_drag_item_mouse_free(get_free_drag);
}

easy_drag_item_mouse_limited(get_limited_drag);

get_free_drag.setAttribute("colliding", false);
let bound = get_free_drag.getBoundingClientRect();
console.log(bound);

let tester = document.elementFromPoint(bound.x + 10, 100);
console.log(tester);