//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var VL8;
(function (VL8) {
    class Tulip extends VL8.SuperFlower {
        constructor() {
            super();
            this.drawTulip();
        }
        //Tulpe
        drawTulip() {
            //Stängel
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#579200";
            VL8.crc2.fillRect(this.x, this.y - 40, 4, 40);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            //Blätter  
            VL8.crc2.fillStyle = "#457200";
            VL8.crc2.arc(this.x - 1, this.y - 29, 30, 0, 1.5);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#457200";
            VL8.crc2.arc(this.x - 3, this.y - 18, 18, 1.3, -3);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            //Blüte
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#FF856C";
            VL8.crc2.arc(this.x + 1, this.y - 58, 18, 0, -3.1);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.strokeStyle = "#FF5735";
            VL8.crc2.moveTo(this.x - 16, this.y - 58);
            VL8.crc2.lineTo(this.x - 16, this.y - 70);
            VL8.crc2.lineTo(this.x - 10, this.y - 59);
            VL8.crc2.lineTo(this.x - 4, this.y - 72);
            VL8.crc2.lineTo(this.x + 2, this.y - 59);
            VL8.crc2.lineTo(this.x + 8, this.y - 72);
            VL8.crc2.lineTo(this.x + 12, this.y - 59);
            VL8.crc2.lineTo(this.x + 18, this.y - 72);
            VL8.crc2.lineTo(this.x + 18, this.y - 57);
            VL8.crc2.fill();
            VL8.crc2.stroke();
            VL8.crc2.closePath();
        }
    }
    VL8.Tulip = Tulip;
})(VL8 || (VL8 = {}));
//# sourceMappingURL=tulip.js.map