//Aufgabe: Abschlussaufgabe
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.07.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var GAME;
(function (GAME) {
    class SuperSnail {
        constructor(_x, _y, _fillColor, _speed) {
            this.x = _x;
            this.y = _y;
            this.fillColor = _fillColor;
            this.speed = _speed;
        }
        //Startposition aller Schnecken
        setStartPosition() {
            this.x = Math.floor(Math.random() * (40 - 450)) + 450;
        }
        //random speed = random Zahl + 1
        move() {
            this.y += Math.random() * this.speed + 1;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //Körper und Kopf
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "black";
            GAME.crc2.arc(this.x - 23, this.y - 70, 14, 1, 0.8);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "black";
            GAME.crc2.arc(this.x - 23, this.y - 78, 10, 1, 0.8);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "black";
            GAME.crc2.arc(this.x - 23, this.y - 40, 14, 1, 0.8);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "black";
            GAME.crc2.arc(this.x - 23, this.y - 35, 13, 1, 0.8);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "black";
            GAME.crc2.arc(this.x - 23, this.y - 30, 11, 1, 0.8);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "black";
            GAME.crc2.arc(this.x - 23, this.y - 25, 10, 1, 0.8);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            //Fühler
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "black";
            GAME.crc2.arc(this.x - 25, this.y + 2, 25, 30, -0.3);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "black";
            GAME.crc2.arc(this.x - 25, this.y + 7, 28, 10, -1.5);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "black";
            GAME.crc2.arc(this.x - 2, this.y - 7, 2.5, 1, 0.8);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = "black";
            GAME.crc2.arc(this.x - 47, this.y - 9, 2.5, 1, 0.8);
            GAME.crc2.closePath();
            GAME.crc2.fill();
            //Buntes Schneckenhaus
            GAME.crc2.beginPath();
            GAME.crc2.fillStyle = this.fillColor;
            GAME.crc2.strokeStyle = "black";
            GAME.crc2.lineWidth = 2;
            GAME.crc2.arc(this.x - 23, this.y - 55, 20, 0, 2 * Math.PI);
            GAME.crc2.closePath();
            GAME.crc2.stroke();
            GAME.crc2.fill();
        }
    }
    GAME.SuperSnail = SuperSnail;
})(GAME || (GAME = {}));
//# sourceMappingURL=supersnail.js.map