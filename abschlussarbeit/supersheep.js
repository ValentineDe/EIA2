//Aufgabe: A
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var GAME;
(function (GAME) {
    class SuperSheep {
        constructor() {
            console.log("Hey, I'm your Sheep!");
            this.setRandomPosition();
        }
        draw() { }
        setRandomPosition() {
            this.x = Math.floor(Math.random() * (700 - 40)) + 40;
            this.y = Math.floor(Math.random() * (1200 - 400)) + 400;
        }
    }
    GAME.SuperSheep = SuperSheep;
})(GAME || (GAME = {}));
//# sourceMappingURL=supersheep.js.map