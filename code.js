// imports 
import { MemoryButton } from "./memoryButton.js";
import { Toolbox } from "./toolbox.js";

// canvas, pencil, and toolbox
let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil
let toolbox = new Toolbox();

// assign one color to two cards
let color1 = toolbox.getRandomColor();
let card1a = new MemoryButton(canvas, pencil, 50, 50, color1);
let card1b = new MemoryButton(canvas, pencil, 200, 50, color1);


// game loop
function gameLoop() {
    // erases the rectangle
    pencil.clearRect(0,0, canvas.width, canvas.height);
    
    // draws cards
    card1a.draw();
    card1b.draw();
}

setInterval(gameLoop, 50);