//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace VL8 {

    export class Daisy extends SuperFlower {

        constructor() {
            super();
            this.drawDaisy();
        }

        //Gänseblümchen
        drawDaisy(): void {

            //Stängel
            crc2.beginPath();
            crc2.fillStyle = "#185A18";
            crc2.fillRect(this.x, this.y - 43, 4, 60);
            crc2.closePath();
            crc2.fill();
            //Blätter  
            crc2.fillStyle = "#337245";
            crc2.arc(this.x - 1, this.y - 29, 30, 0, 1.5);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#185A18";
            crc2.arc(this.x + 29, this.y - 4, 25, 3, -1.5);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#185A18";
            crc2.arc(this.x - 14, this.y - 19, 16, 4.1, 0.4);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#337245";
            crc2.arc(this.x - 3, this.y - 30, 18, 1.3, - 3);
            crc2.closePath();
            crc2.fill();
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(this.x - 10, this.y - 50, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(this.x + 2, this.y - 63, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(this.x + 14, this.y - 50, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(this.x + 2, this.y - 38, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#F5B700";
            crc2.arc(this.x + 2, this.y - 50, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
}
