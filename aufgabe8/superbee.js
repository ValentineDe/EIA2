//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var VL8;
(function (VL8) {
    class SuperBee {
        constructor(_x, _y, _color, _size) {
            console.log("Hey, I'm your Bee!");
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.size = _size;
        }
        setStart() {
            this.x = 420;
            this.y = 490;
            this.color = "#FFB300";
        }
        move() {
            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 9 - 4.5;
            if (this.x >= 565)
                this.x = -5;
            if (this.y <= 5)
                this.y = 645;
            if (this.x < -5)
                this.x = 565;
            if (this.y > 645)
                this.y = 5;
        }
        drawBee() {
            if (this.size == false) {
                //Körper
                VL8.crc2.beginPath();
                VL8.crc2.strokeStyle = "black";
                VL8.crc2.fillStyle = this.color;
                VL8.crc2.arc(this.x + 30, this.y + 8, 4, 0, 2 * Math.PI);
                VL8.crc2.closePath();
                VL8.crc2.stroke();
                VL8.crc2.fill();
                //Kopf
                VL8.crc2.beginPath();
                VL8.crc2.strokeStyle = "black";
                VL8.crc2.fillStyle = "yellow";
                VL8.crc2.arc(this.x + 40, this.y + 10, 6, 0, 2 * Math.PI);
                VL8.crc2.closePath();
                VL8.crc2.stroke();
                VL8.crc2.fill();
                //Auge
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "black";
                VL8.crc2.arc(this.x + 28, this.y + 8, 1, 0, 2 * Math.PI);
                VL8.crc2.closePath();
                VL8.crc2.fill();
                //Streifen
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "black";
                VL8.crc2.arc(this.x + 20, this.y + 10, 14, 5.8, 0.4);
                VL8.crc2.closePath();
                VL8.crc2.fill();
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "black";
                VL8.crc2.arc(this.x + 24, this.y + 10, 15, 5.8, 0.4);
                VL8.crc2.closePath();
                VL8.crc2.fill();
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "black";
                VL8.crc2.arc(this.x + 32, this.y + 10, 12, 5.8, 0.4);
                VL8.crc2.closePath();
                VL8.crc2.fill();
                //Füße
                VL8.crc2.beginPath();
                VL8.crc2.strokeStyle = "black";
                VL8.crc2.lineWidth = 1;
                VL8.crc2.moveTo(this.x + 36, this.y + 16);
                VL8.crc2.lineTo(this.x + 38, this.y + 20);
                VL8.crc2.fill();
                VL8.crc2.stroke();
                VL8.crc2.closePath();
                VL8.crc2.moveTo(this.x + 45, this.y + 16);
                VL8.crc2.lineTo(this.x + 47, this.y + 20);
                VL8.crc2.fill();
                VL8.crc2.stroke();
                VL8.crc2.closePath();
                //Fühler
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "black";
                VL8.crc2.arc(this.x + 20, this.y + 9, 7, 30, -0.5);
                VL8.crc2.closePath();
                VL8.crc2.fill();
                //Flügel
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "white";
                VL8.crc2.strokeStyle = "black";
                VL8.crc2.arc(this.x + 39, this.y - 1, 5, 0, 2 * Math.PI);
                VL8.crc2.closePath();
                VL8.crc2.stroke();
                VL8.crc2.fill();
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "white";
                VL8.crc2.strokeStyle = "black";
                VL8.crc2.arc(this.x + 42, this.y + 0, 5, 0, 2 * Math.PI);
                VL8.crc2.closePath();
                VL8.crc2.stroke();
                VL8.crc2.fill();
            }
            if (this.size == true) {
                //Körper
                VL8.crc2.beginPath();
                VL8.crc2.strokeStyle = "black";
                VL8.crc2.fillStyle = this.color;
                VL8.crc2.arc(this.x + 30, this.y + 8, 6, 0, 2 * Math.PI);
                VL8.crc2.closePath();
                VL8.crc2.stroke();
                VL8.crc2.fill();
                //Kopf
                VL8.crc2.beginPath();
                VL8.crc2.strokeStyle = "black";
                VL8.crc2.fillStyle = "yellow";
                VL8.crc2.arc(this.x + 40, this.y + 10, 8, 0, 2 * Math.PI);
                VL8.crc2.closePath();
                VL8.crc2.stroke();
                VL8.crc2.fill();
                //Auge
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "black";
                VL8.crc2.arc(this.x + 28, this.y + 8, 2, 0, 2 * Math.PI);
                VL8.crc2.closePath();
                VL8.crc2.fill();
                //Streifen
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "black";
                VL8.crc2.arc(this.x + 20, this.y + 10, 17, 5.8, 0.4);
                VL8.crc2.closePath();
                VL8.crc2.fill();
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "black";
                VL8.crc2.arc(this.x + 24, this.y + 10, 19, 5.8, 0.4);
                VL8.crc2.closePath();
                VL8.crc2.fill();
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "black";
                VL8.crc2.arc(this.x + 32, this.y + 10, 15.5, 5.8, 0.4);
                VL8.crc2.closePath();
                VL8.crc2.fill();
                //Füße
                VL8.crc2.beginPath();
                VL8.crc2.strokeStyle = "black";
                VL8.crc2.lineWidth = 2;
                VL8.crc2.moveTo(this.x + 36, this.y + 16);
                VL8.crc2.lineTo(this.x + 38, this.y + 22);
                VL8.crc2.fill();
                VL8.crc2.stroke();
                VL8.crc2.closePath();
                VL8.crc2.moveTo(this.x + 45, this.y + 16);
                VL8.crc2.lineTo(this.x + 47, this.y + 22);
                VL8.crc2.fill();
                VL8.crc2.stroke();
                VL8.crc2.closePath();
                //Fühler
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "black";
                VL8.crc2.arc(this.x + 20, this.y + 9, 10, 30, -0.5);
                VL8.crc2.closePath();
                VL8.crc2.fill();
                //Flügel
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "white";
                VL8.crc2.strokeStyle = "black";
                VL8.crc2.arc(this.x + 39, this.y - 1, 6, 0, 2 * Math.PI);
                VL8.crc2.closePath();
                VL8.crc2.stroke();
                VL8.crc2.fill();
                VL8.crc2.beginPath();
                VL8.crc2.fillStyle = "white";
                VL8.crc2.strokeStyle = "black";
                VL8.crc2.arc(this.x + 42, this.y + 0, 6, 0, 2 * Math.PI);
                VL8.crc2.closePath();
                VL8.crc2.stroke();
                VL8.crc2.fill();
            }
        }
    }
    VL8.SuperBee = SuperBee;
})(VL8 || (VL8 = {}));
//# sourceMappingURL=superbee.js.map