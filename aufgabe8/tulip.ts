//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace VL8 {

    export class Tulip extends SuperFlower {

        constructor() {
            super();
            this.drawTulip();
        }

        //Tulpe
        drawTulip(): void {

            //Stängel
            crc2.beginPath();
            crc2.fillStyle = "#579200";
            crc2.fillRect(this.x, this.y - 40, 4, 40);
            crc2.closePath();
            crc2.fill();
            //Blätter  
            crc2.fillStyle = "#457200";
            crc2.arc(this.x - 1, this.y - 29, 30, 0, 1.5);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#457200";
            crc2.arc(this.x - 3, this.y - 18, 18, 1.3, - 3);
            crc2.closePath();
            crc2.fill();
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#FF856C";
            crc2.arc(this.x + 1, this.y - 58, 18, 0, - 3.1);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.strokeStyle = "#FF5735";
            crc2.moveTo(this.x - 16, this.y - 58);
            crc2.lineTo(this.x - 16, this.y - 70);
            crc2.lineTo(this.x - 10, this.y - 59);
            crc2.lineTo(this.x - 4, this.y - 72);
            crc2.lineTo(this.x + 2, this.y - 59);
            crc2.lineTo(this.x + 8, this.y - 72);
            crc2.lineTo(this.x + 12, this.y - 59);
            crc2.lineTo(this.x + 18, this.y - 72);
            crc2.lineTo(this.x + 18, this.y - 57);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
    }
}       