const canvas = easy_quick_create("canvas");
const ctx = canvas.getContext("2d", {
    colorSpace: "srgb"
});

canvas.width = 5;
canvas.height = 5;

// document.body.insertBefore(canvas, document.body.firstChild);

const myimg = new Image();
myimg.src = "./assets/sprites/test_for_coding.png";

myimg.addEventListener("load", (e) => {
    ctx.drawImage(myimg, 0, 0);
    const scan = ctx.getImageData(0, 0, 5, 5);
    console.log(scan.data);
})
