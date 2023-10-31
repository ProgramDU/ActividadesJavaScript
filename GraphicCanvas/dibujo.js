const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(101, 102, 2, 0,
Math.PI * 2, true);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(202, 204, 4, 1,
Math.PI * 2, true);
ctx.fill();


ctx.fillStyle = "rgb(202, 96, 26)"
ctx.beginPath();
ctx.moveTo(83, 116);
ctx.lineTo(83, 102);
ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
ctx.lineTo(111, 116);
ctx.lineTo(106.333, 111.333);
ctx.lineTo(101.666, 116);
ctx.lineTo(97, 111.333);
ctx.lineTo(92.333 , 116);
ctx.lineTo(87.666, 111.333)
ctx.lineTo(83, 116);
ctx.fill();


ctx.fillStyle = "rgb(146, 12, 12)"
ctx.beginPath();
ctx.moveTo(166, 232);
ctx.lineTo(166, 204);
ctx.bezierCurveTo(166, 188, 178, 176, 194, 176);
ctx.bezierCurveTo(210, 176, 222, 188, 222, 204);
ctx.lineTo(222, 232);
ctx.lineTo(212.666, 222.666);
ctx.lineTo(203.332, 232);
ctx.lineTo(194, 222.666);
ctx.lineTo(184.666, 232);
ctx.lineTo(175.332, 222.666)
ctx.lineTo(166, 232);
ctx.fill();

ctx.fillStyle = "rgb(146, 12, 12)"
ctx.beginPath();
ctx.moveTo(166, 232);
ctx.lineTo(166, 204);
ctx.bezierCurveTo(166, 188, 178, 176, 194, 176);
ctx.bezierCurveTo(210, 176, 222, 188, 222, 204);
ctx.lineTo(222, 232);
ctx.lineTo(212.666, 222.666);
ctx.lineTo(203.332, 232);
ctx.lineTo(194, 222.666);
ctx.lineTo(184.666, 232);
ctx.lineTo(175.332, 222.666)
ctx.lineTo(166, 232);
ctx.fill();



