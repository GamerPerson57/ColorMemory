export class Card {
    
    x = 50;
    y = 50;
    width = 50;
    height = 50;
    canvas;
    pencil;

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;
    }

    drawCards() {
        this.pencil.fillStyle = 'black';
        this.pencil.fillRect(

        );
    }
    

    cards = [
        'red', 'orange', 'yellow', 
        'green', 'blue', 'purple'
    ];
}