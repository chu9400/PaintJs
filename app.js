const canvas = document.getElementById("jsCanvas");

function onMouseMove(event) {
console.log(event);
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
}