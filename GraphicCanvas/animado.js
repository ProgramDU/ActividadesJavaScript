const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let idx= 0;
let idy= 0;
let ini= 0;

function rgbRandom(){
    const letras = '0123456789abcdef';
    let colorRgb = '#';
    for (let i = 0; i < 6; i++){
        colorRgb += letras.charAt(Math.floor(Math.random() * 16));
    }
    return colorRgb;
}
function hlsColor(h){
    return `hsl(${ h }, 50%, 50%)`};



function cuadro(x, y){
    ctx.fillStyle = hlsColor(ini);
    ini += 5;
    ctx.fillRect(x, y, 40, 40);
    ctx.strokeRect(x, y, 40, 40);
}

setInterval(() => {
    cuadro(idx, idy);
    if(idx < 360){
        idx += 40;
    } else {
        idy +=40;
        idx = 0;
    }
}, 200);


