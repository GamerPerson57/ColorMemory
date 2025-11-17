// imports 
import { MemoryButton } from "./memoryButton.js";
import { Toolbox } from "./toolbox.js";

// canvas, pencil, and toolbox
let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil
let toolbox = new Toolbox();

// creates cards *condensed it using a for loop*
let allCards = [];
for (let i = 0; i < 8; i++) {
    let color = toolbox.getRandomColor();
    allCards.push(new MemoryButton(canvas, pencil, 0, 0, color));
    allCards.push(new MemoryButton(canvas, pencil, 0, 0, color));
}

// all possible positions of cards
let positions = [

    {x: 25, y: 25}, {x: 175, y: 25}, {x: 325, y: 25},{x: 475, y: 25},
    {x: 25, y: 175}, {x: 175, y: 175},{x: 325, y: 175},{x: 475, y: 175},
    {x: 25, y: 325}, {x: 175, y: 325}, {x: 325, y: 325}, {x: 475, y: 325},
    {x: 25, y: 475}, {x: 175, y: 475}, {x: 325, y: 475}, {x: 475, y: 475}
    
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

    let allFaceUp = allCards.every(card => card.isFaceUp);

    // when player matches every color, they win
    if(allFaceUp) {
        pencil.clearRect(0, 0, canvas.width, canvas.height);
        pencil.fillStyle = "black";
        pencil.font = "40px Arial";
        pencil.fillText("You Win!", canvas.width / 2 - 80, canvas.height / 2);
        
    }

}

setInterval(gameLoop, 50);