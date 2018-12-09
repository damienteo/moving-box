var box = document.querySelector(".greenBox");

var boxLeft = 0;

var boxUp = 0;

function moveBox(e) {
// keyCode for up arrow key is 38
    if (e.keyCode==38) {
        boxUp -= 20;
        box.style.top = boxUp + "px";
        console.log("up");
        if (boxUp <= 0) {
            boxUp += 20;
        }
    }
// keyCode for right arrow key is 39
    if (e.keyCode==39) {
        boxLeft += 20;
        box.style.left = boxLeft + "px";
        console.log("right");
        if (boxLeft >= 600) {
            boxLeft -= 20;
        }
    }
// keyCode for down arrow key is 40
    if (e.keyCode==40) {
        boxUp += 20;
        box.style.top = boxUp + "px";
        console.log("down");
        if (boxUp >= 600) {
            boxUp -= 20;
        }
    }
// keyCode for left arrow key is 37
    if (e.keyCode==37) {
        boxLeft -= 20;
        box.style.left = boxLeft + "px";
        console.log("left");
        if (boxLeft <= 0) {
            boxLeft += 20;
        }
    }
}

// document.onkeydown = moveBox();

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

document.addEventListener('keydown', moveBox);