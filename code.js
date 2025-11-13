import { Card } from "./card.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

let card = new Card();

function gameLoop() {

}

setInterval(gameLoop, 50);

function detectClick() {
    console.log("Clicked!")
    card.click();

}

canvas.addEventListener("click", detectClick);