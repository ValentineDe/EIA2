//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace GAME {

    export class WhiteSheep extends SuperSheep {

        constructor() {
            super();
            this.drawWhiteSheep();
        }

        drawWhiteSheep(): void {

            crc2.beginPath();
            crc2.fillStyle = "white";

            crc2.arc(this.x - 23, this.y - 55, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.arc(this.x - 25, this.y - 40, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(this.x + 20, this.y - 53, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(this.x + 0, this.y - 65, 18, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(this.x - 3, this.y - 45, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
}