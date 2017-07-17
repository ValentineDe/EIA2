//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var GAME;
(function (GAME) {
    class WhiteSheep extends GAME.SuperSheep {
        constructor() {
            super();
            this.drawWhiteSheep();
        }
        drawWhiteSheep() {
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "white";
            GAME.crc2.arc(this.x - 23, this.y - 55, 10, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.arc(this.x - 25, this.y - 40, 12, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(this.x + 20, this.y - 53, 15, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(this.x + 0, this.y - 65, 18, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(this.x - 3, this.y - 45, 20, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
        }
    }
    GAME.WhiteSheep = WhiteSheep;
})(GAME || (GAME = {}));
//# sourceMappingURL=whitesheep.js.map