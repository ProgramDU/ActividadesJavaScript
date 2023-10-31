const body = document.querySelector('body');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const trans = document.querySelector('#trans');

function setColor(){
    //rgb(0, 255, 14);
    // rgba(0, 255, 35, 0.5);
    const redVal = red.value;
    const greenVal = green.value;
    const blueVal = blue.value;
    const transVal = trans.value/100;
    const rgbaColor = `rgb(${ redVal }, ${ greenVal }, ${ blueVal }, ${ transVal })`;
    body.style.background = rgbaColor;

}
setColor();
red.addEventListener('input', setColor);
green.addEventListener('input', setColor);
blue.addEventListener('input', setColor);
trans.addEventListener('input', setColor);