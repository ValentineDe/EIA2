//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace VL8 {

    export class Rose extends SuperFlower {

        constructor() {
            super();
            this.drawRose();
        }

        //Rose
        drawRose(): void {

            //Stängel
            crc2.beginPath();
            crc2.fillStyle = "#03AF00";
            crc2.fillRect(this.x, this.y - 40, 4, 40);
            crc2.closePath();
            crc2.fill();
            //Blätter  
            crc2.fillStyle = "#89FF87";
            crc2.arc(this.x + 2, this.y - 29, 15, 0, 1.5);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#64D562";
            crc2.arc(this.x + 17, this.y - 13, 15, 3, -1.5);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#64D562";
            crc2.arc(this.x - 10, this.y - 12, 11, 4.1, 0.4);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#89FF87";
            crc2.arc(this.x - 2, this.y - 19, 13, 1.3, - 3);
            crc2.closePath();
            crc2.fill();
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#C4C8E1";
            crc2.arc(this.x + 2, this.y - 56, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#C4C8E1";
            crc2.arc(this.x + 2, this.y - 33, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#C4C8E1";
            crc2.arc(this.x + 15, this.y - 50, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#C4C8E1";
            crc2.arc(this.x + 14, this.y - 37, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#C4C8E1";
            crc2.arc(this.x - 10, this.y - 50, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#C4C8E1";
            crc2.arc(this.x - 9, this.y - 37, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#9FA7DC";
            crc2.arc(this.x - 3, this.y - 50, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#9FA7DC";
            crc2.arc(this.x + 7, this.y - 50, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#9FA7DC";
            crc2.arc(this.x - 3, this.y - 39, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#9FA7DC";
            crc2.arc(this.x + 7, this.y - 39, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#9FA7DC";
            crc2.arc(this.x - 8, this.y - 45, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#9FA7DC";
            crc2.arc(this.x + 12, this.y - 45, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#7C89DF";
            crc2.arc(this.x + 2, this.y - 48, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#7C89DF";
            crc2.arc(this.x + 2, this.y - 42, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#7C89DF";
            crc2.arc(this.x + 6, this.y - 45, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#7C89DF";
            crc2.arc(this.x - 2, this.y - 45, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#596BDB";
            crc2.arc(this.x + 2, this.y - 45, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
}
