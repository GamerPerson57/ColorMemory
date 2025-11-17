// imports 
import { MemoryButton } from "./memoryButton.js";
import { Toolbox } from "./toolbox.js";

// canvas, pencil, and toolbox
let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil
let toolbox = new Toolbox();

// creates cards
let color1 = toolbox.getRandomColor();
let card1a = new MemoryButton(canvas, pencil, 0, 0, color1);
let card1b = new MemoryButton(canvas, pencil, 0, 0, color1);

let color2 = toolbox.getRandomColor();
let card2a = new MemoryButton(canvas, pencil, 0, 0, color2);
let card2b = new MemoryButton(canvas, pencil, 0, 0, color2);

let color3 = toolbox.getRandomColor();
let card3a = new MemoryButton(canvas, pencil, 0, 0, color3);
let card3b = new MemoryButton(canvas, pencil, 0, 0, color3);

let color4 = toolbox.getRandomColor();
let card4a = new MemoryButton(canvas, pencil, 0, 0, color4);
let card4b = new MemoryButton(canvas, pencil, 0, 0, color4);

let color5 = toolbox.getRandomColor();
let card5a = new MemoryButton(canvas, pencil, 0, 0, color5);
let card5b = new MemoryButton(canvas, pencil, 0, 0, color5);

let color6 = toolbox.getRandomColor();
let card6a = new MemoryButton(canvas, pencil, 0, 0, color6);
let card6b = new MemoryButton(canvas, pencil, 0, 0, color6);

let color7 = toolbox.getRandomColor();
let card7a = new MemoryButton(canvas, pencil, 0, 0, color7);
let card7b = new MemoryButton(canvas, pencil, 0, 0, color7);

let color8 = toolbox.getRandomColor();
let card8a = new MemoryButton(canvas, pencil, 0, 0, color8);
let card8b = new MemoryButton(canvas, pencil, 0, 0, color8);




let allCards = [
    card1a, 
    card1b, 
    card2a, 
    card2b, 
    card3a, 
    card3b, 
    card4a, 
    card4b,
    card5a, 
    card5b, 
    card6a, 
    card6b, 
    card7a, 
    card7b, 
    card8a, 
    card8b
];

// all possible positions of cards
let positions = [
    {x: 25, y: 25},
    {x: 175, y: 25},
    {x: 325, y: 25},
    {x: 475, y: 25},
    {x: 25, y: 175},
    {x: 175, y: 175},
    {x: 325, y: 175},
    {x: 475, y: 175},
    {x: 25, y: 325},
    {x: 175, y: 325},
    {x: 325, y: 325},
    {x: 475, y: 325},
    {x: 25, y: 475},
    {x: 175, y: 475},
    {x: 325, y: 475},
    {x: 475, y: 475}
    
];


// shuffles cards at start
function shuffleCards() {
    let shuffledPositions = toolbox.shuffleArray([...positions]);

    allCards.forEach((card, index) => {
        card.x = shuffledPositions[index].x;
        card.y = shuffledPositions[index].y;
    });

}

shuffleCards();

// game loop
function gameLoop() {
    // erases the rectangle
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    // draws each card in the allCards array
    allCards.forEach(card => card.draw());
}

setInterval(gameLoop, 50);