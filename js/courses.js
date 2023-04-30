const coursesBtncolor = document.querySelector('.courses__button-blink');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let indexColor = 0;

function updateColor() {
    coursesBtncolor.style.background = colors[indexColor++];
    indexColor = indexColor % colors.length;
}

let interval = setInterval(updateColor, 500);

