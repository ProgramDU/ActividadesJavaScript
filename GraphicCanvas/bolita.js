const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let dirX = 1;
let dirY = 1;

let idX = 8;
let idY = 8;

let ini= 0;

function hlsColor(h){
    return `hsl(${ h }, 50%, 50%)`};

function bolita(x, y){
    ctx.fillStyle =  hlsColor(ini);
    ini += 2;
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2 );
    ctx.fill();
}



setInterval(() => {
    //ctx.clearRect(100, 200, 600, 400);
    bolita(idX, idY);
    if( dirX === 1 && dirY ===1){
        idX += 1;
        idY += 1;
    } else if (dirX === 1 && dirY ===2){
        idX += 1;
        idY -= 1;
    } else if (dirX === 2 && dirY === 1){
        idX -= 1
        idY += 1;
    } else {
        idX -= 1;
        idY -= 1;
    }

    // cambiar direcciones
    if( idX >590) dirX = 2;
    if( idX <10) dirX = 1;
    if( idY > 390) dirY = 2;
    if( idY <10 ) dirY = 1;

}, 0);