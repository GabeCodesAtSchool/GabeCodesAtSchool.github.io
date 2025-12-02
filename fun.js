let moving = false;
let leftPos = 0;
function animate() {
    document.getElementById("char").scrollIntoView({behavior: 'smooth', block: 'center', inline: "center"});
    if (moving) {
        leftPos++;
    }
    document.getElementById("char").style.left = `${leftPos}px`;
}
setInterval(animate, 30);
function move() {
    moving = !moving;
}