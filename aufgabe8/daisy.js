//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var VL8;
(function (VL8) {
    class Daisy extends VL8.SuperFlower {
        constructor() {
            super();
            this.drawDaisy();
        }
        //Gänseblümchen
        drawDaisy() {
            //Stängel
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#185A18";
            VL8.crc2.fillRect(this.x, this.y - 43, 4, 60);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            //Blätter  
            VL8.crc2.fillStyle = "#337245";
            VL8.crc2.arc(this.x - 1, this.y - 29, 30, 0, 1.5);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#185A18";
            VL8.crc2.arc(this.x + 29, this.y - 4, 25, 3, -1.5);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#185A18";
            VL8.crc2.arc(this.x - 14, this.y - 19, 16, 4.1, 0.4);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#337245";
            VL8.crc2.arc(this.x - 3, this.y - 30, 18, 1.3, -3);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            //Blüte
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "white";
            VL8.crc2.arc(this.x - 10, this.y - 50, 12, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.arc(this.x + 2, this.y - 63, 12, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.arc(this.x + 14, this.y - 50, 12, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.arc(this.x + 2, this.y - 38, 12, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#F5B700";
            VL8.crc2.arc(this.x + 2, this.y - 50, 10, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
        }
    }
    VL8.Daisy = Daisy;
})(VL8 || (VL8 = {}));
//# sourceMappingURL=daisy.js.map