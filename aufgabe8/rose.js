//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var VL8;
(function (VL8) {
    class Rose extends VL8.SuperFlower {
        constructor() {
            super();
            this.drawRose();
        }
        //Rose
        drawRose() {
            //Stängel
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#03AF00";
            VL8.crc2.fillRect(this.x, this.y - 40, 4, 40);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            //Blätter  
            VL8.crc2.fillStyle = "#89FF87";
            VL8.crc2.arc(this.x + 2, this.y - 29, 15, 0, 1.5);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#64D562";
            VL8.crc2.arc(this.x + 17, this.y - 13, 15, 3, -1.5);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#64D562";
            VL8.crc2.arc(this.x - 10, this.y - 12, 11, 4.1, 0.4);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#89FF87";
            VL8.crc2.arc(this.x - 2, this.y - 19, 13, 1.3, -3);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            //Blüte
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#C4C8E1";
            VL8.crc2.arc(this.x + 2, this.y - 56, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#C4C8E1";
            VL8.crc2.arc(this.x + 2, this.y - 33, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#C4C8E1";
            VL8.crc2.arc(this.x + 15, this.y - 50, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#C4C8E1";
            VL8.crc2.arc(this.x + 14, this.y - 37, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#C4C8E1";
            VL8.crc2.arc(this.x - 10, this.y - 50, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#C4C8E1";
            VL8.crc2.arc(this.x - 9, this.y - 37, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#9FA7DC";
            VL8.crc2.arc(this.x - 3, this.y - 50, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#9FA7DC";
            VL8.crc2.arc(this.x + 7, this.y - 50, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#9FA7DC";
            VL8.crc2.arc(this.x - 3, this.y - 39, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#9FA7DC";
            VL8.crc2.arc(this.x + 7, this.y - 39, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#9FA7DC";
            VL8.crc2.arc(this.x - 8, this.y - 45, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#9FA7DC";
            VL8.crc2.arc(this.x + 12, this.y - 45, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#7C89DF";
            VL8.crc2.arc(this.x + 2, this.y - 48, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#7C89DF";
            VL8.crc2.arc(this.x + 2, this.y - 42, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#7C89DF";
            VL8.crc2.arc(this.x + 6, this.y - 45, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#7C89DF";
            VL8.crc2.arc(this.x - 2, this.y - 45, 8, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
            VL8.crc2.beginPath();
            VL8.crc2.fillStyle = "#596BDB";
            VL8.crc2.arc(this.x + 2, this.y - 45, 5, 0, 2 * Math.PI);
            VL8.crc2.closePath();
            VL8.crc2.fill();
        }
    }
    VL8.Rose = Rose;
})(VL8 || (VL8 = {}));
//# sourceMappingURL=rose.js.map