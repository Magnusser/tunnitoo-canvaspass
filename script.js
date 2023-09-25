let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
// Flag
ctx.rect(20,15,50,20);
ctx.fillStyle = 'blue';
ctx.fillRect(20,15,50,20);
ctx.rect(20,35,50,20);
ctx.fillStyle = 'black';
ctx.fillRect(20,35,50,35);
ctx.rect(20,55,50,20);
ctx.fillStyle = 'white';
ctx.fillRect(20,55,50,20);
ctx.stroke();
// Star
ctx.beginPath(); 
ctx.moveTo(100,55);
ctx.lineTo(120,70);
ctx.lineTo(110,50);
ctx.lineTo(100,70);
ctx.lineTo(120,55);
ctx.lineTo(100,55);
ctx.stroke();
// Pie
ctx.beginPath();
ctx.arc(110,100, 20, 0, 2 * Math.PI);
ctx.lineWidth = 1;
ctx.fillStyle = 'black'; //this will make sense later
ctx.fill();
ctx.stroke();
// Slice
ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(110,100, 20, 5, 10);
ctx.lineTo(110,100);
ctx.lineTo(110,80);
ctx.fillStyle = 'white'; //goes on top of the *first* one, so it looks all the same
ctx.fill();
ctx.stroke();