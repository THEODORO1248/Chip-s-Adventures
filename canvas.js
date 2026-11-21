const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const chip = {
    x: 100,
    y: 100,
    speed: 0,
    width: 50,
    height: 50
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "blue";
ctx.fillRect(chip.x, chip.y, chip.width, chip.height);
confirmbutton.addEventListener("click", function() {
    canvas.style.display = "block";
});

document.addEventListener("keydown", function(event) {
    if(event.key === "d" || event.key === "ArrowRight") {
        if(chip.x + chip.width + 10 <= canvas.width) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            chip.x += 10;
            ctx.fillRect(chip.x, chip.y, chip.width, chip.height);
        }
    } else if(event.key === "a" || event.key === "ArrowLeft") {
        if(chip.x - 10 >= 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            chip.x -= 10;
            ctx.fillRect(chip.x, chip.y, chip.width, chip.height);
        }
    }
});