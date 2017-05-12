//Aufgabe: Aufgabe 7
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 11.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var Objektorientiert;
(function (Objektorientiert) {
    class IndividualBee {
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
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.strokeStyle = "black";
                Objektorientiert.crc2.fillStyle = this.color;
                Objektorientiert.crc2.arc(this.x + 30, this.y + 8, 4, 0, 2 * Math.PI);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.fill();
                //Kopf
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.strokeStyle = "black";
                Objektorientiert.crc2.fillStyle = "yellow";
                Objektorientiert.crc2.arc(this.x + 40, this.y + 10, 6, 0, 2 * Math.PI);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.fill();
                //Auge
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "black";
                Objektorientiert.crc2.arc(this.x + 28, this.y + 8, 1, 0, 2 * Math.PI);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.fill();
                //Streifen
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "black";
                Objektorientiert.crc2.arc(this.x + 20, this.y + 10, 14, 5.8, 0.4);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.fill();
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "black";
                Objektorientiert.crc2.arc(this.x + 24, this.y + 10, 15, 5.8, 0.4);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.fill();
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "black";
                Objektorientiert.crc2.arc(this.x + 32, this.y + 10, 12, 5.8, 0.4);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.fill();
                //Füße
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.strokeStyle = "black";
                Objektorientiert.crc2.lineWidth = 1;
                Objektorientiert.crc2.moveTo(this.x + 36, this.y + 16);
                Objektorientiert.crc2.lineTo(this.x + 38, this.y + 20);
                Objektorientiert.crc2.fill();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.moveTo(this.x + 45, this.y + 16);
                Objektorientiert.crc2.lineTo(this.x + 47, this.y + 20);
                Objektorientiert.crc2.fill();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.closePath();
                //Fühler
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "black";
                Objektorientiert.crc2.arc(this.x + 20, this.y + 9, 7, 30, -0.5);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.fill();
                //Flügel
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "white";
                Objektorientiert.crc2.strokeStyle = "black";
                Objektorientiert.crc2.arc(this.x + 39, this.y - 1, 5, 0, 2 * Math.PI);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.fill();
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "white";
                Objektorientiert.crc2.strokeStyle = "black";
                Objektorientiert.crc2.arc(this.x + 42, this.y + 0, 5, 0, 2 * Math.PI);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.fill();
            }
            if (this.size == true) {
                //Körper
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.strokeStyle = "black";
                Objektorientiert.crc2.fillStyle = this.color;
                Objektorientiert.crc2.arc(this.x + 30, this.y + 8, 6, 0, 2 * Math.PI);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.fill();
                //Kopf
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.strokeStyle = "black";
                Objektorientiert.crc2.fillStyle = "yellow";
                Objektorientiert.crc2.arc(this.x + 40, this.y + 10, 8, 0, 2 * Math.PI);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.fill();
                //Auge
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "black";
                Objektorientiert.crc2.arc(this.x + 28, this.y + 8, 2, 0, 2 * Math.PI);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.fill();
                //Streifen
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "black";
                Objektorientiert.crc2.arc(this.x + 20, this.y + 10, 17, 5.8, 0.4);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.fill();
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "black";
                Objektorientiert.crc2.arc(this.x + 24, this.y + 10, 19, 5.8, 0.4);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.fill();
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "black";
                Objektorientiert.crc2.arc(this.x + 32, this.y + 10, 15.5, 5.8, 0.4);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.fill();
                //Füße
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.strokeStyle = "black";
                Objektorientiert.crc2.lineWidth = 2;
                Objektorientiert.crc2.moveTo(this.x + 36, this.y + 16);
                Objektorientiert.crc2.lineTo(this.x + 38, this.y + 22);
                Objektorientiert.crc2.fill();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.moveTo(this.x + 45, this.y + 16);
                Objektorientiert.crc2.lineTo(this.x + 47, this.y + 22);
                Objektorientiert.crc2.fill();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.closePath();
                //Fühler
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "black";
                Objektorientiert.crc2.arc(this.x + 20, this.y + 9, 10, 30, -0.5);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.fill();
                //Flügel
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "white";
                Objektorientiert.crc2.strokeStyle = "black";
                Objektorientiert.crc2.arc(this.x + 39, this.y - 1, 6, 0, 2 * Math.PI);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.fill();
                Objektorientiert.crc2.beginPath();
                Objektorientiert.crc2.fillStyle = "white";
                Objektorientiert.crc2.strokeStyle = "black";
                Objektorientiert.crc2.arc(this.x + 42, this.y + 0, 6, 0, 2 * Math.PI);
                Objektorientiert.crc2.closePath();
                Objektorientiert.crc2.stroke();
                Objektorientiert.crc2.fill();
            }
        }
    }
    Objektorientiert.IndividualBee = IndividualBee;
})(Objektorientiert || (Objektorientiert = {}));
//# sourceMappingURL=bee.js.map