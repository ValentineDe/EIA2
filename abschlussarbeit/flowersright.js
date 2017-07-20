//Aufgabe: Abschlussaufgabe
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.07.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var GAME;
(function (GAME) {
    class FlowersRight {
        constructor() {
            this.setRandomPosition();
        }
        drawFlower() {
            //Blüte
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "white";
            GAME.crc2.arc(this.x - 10, this.y - 50, 12, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(this.x + 2, this.y - 63, 12, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(this.x + 14, this.y - 50, 12, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.arc(this.x + 2, this.y - 38, 12, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "#F5B700";
            GAME.crc2.arc(this.x + 2, this.y - 50, 10, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.fill();
        }
        setRandomPosition() {
            this.x = Math.floor(Math.random() * (890 - 850)) + 850;
            this.y = Math.floor(Math.random() * (1500 - 30)) + 30;
        }
    }
    GAME.FlowersRight = FlowersRight;
})(GAME || (GAME = {}));
//# sourceMappingURL=flowersright.js.map