//Datum: 11.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var Objektorientiert;
(function (Objektorientiert) {
    class IndividualFlower {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        createRandomFlowerfield() {
            //Generiere random-Blumenwiese
            for (var i = 0; i < 15; i++) {
                let blumenWiese = Math.floor((Math.random() * 3) + 0); //random-Zahl + 0
                this.x = Math.floor(Math.random() * (400 + 100)) - 100; //Blumen werden auf einer Breite von 420px generiert. Vom rechten Rand zum linken Rand.
                this.y = Math.floor(Math.random() * (650 - 350)) + 350; //Blumen werden in einer Höhe bis zu 300 px generiert. Vom unteren Rand bis zu oberen Rand.
                switch (blumenWiese) {
                    case 0:
                        this.drawTulip();
                        break;
                    case 1:
                        this.drawRose();
                        break;
                    case 2:
                        this.drawDaisy();
                        break;
                }
            }
        }
        //Tulpe
        drawTulip() {
            //Stängel
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#579200";
            Objektorientiert.crc2.fillRect(this.x, this.y - 40, 4, 40);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            //Blätter  
            Objektorientiert.crc2.fillStyle = "#457200";
            Objektorientiert.crc2.arc(this.x - 1, this.y - 29, 30, 0, 1.5);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#457200";
            Objektorientiert.crc2.arc(this.x - 3, this.y - 18, 18, 1.3, -3);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            //Blüte
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#FF856C";
            Objektorientiert.crc2.arc(this.x + 1, this.y - 58, 18, 0, -3.1);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.strokeStyle = "#FF5735";
            Objektorientiert.crc2.moveTo(this.x - 16, this.y - 58);
            Objektorientiert.crc2.lineTo(this.x - 16, this.y - 70);
            Objektorientiert.crc2.lineTo(this.x - 10, this.y - 59);
            Objektorientiert.crc2.lineTo(this.x - 4, this.y - 72);
            Objektorientiert.crc2.lineTo(this.x + 2, this.y - 59);
            Objektorientiert.crc2.lineTo(this.x + 8, this.y - 72);
            Objektorientiert.crc2.lineTo(this.x + 12, this.y - 59);
            Objektorientiert.crc2.lineTo(this.x + 18, this.y - 72);
            Objektorientiert.crc2.lineTo(this.x + 18, this.y - 57);
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.stroke();
            Objektorientiert.crc2.closePath();
        }
        //Gänseblümchen
        drawDaisy() {
            //Stängel
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#185A18";
            Objektorientiert.crc2.fillRect(this.x, this.y - 43, 4, 60);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            //Blätter  
            Objektorientiert.crc2.fillStyle = "#337245";
            Objektorientiert.crc2.arc(this.x - 1, this.y - 29, 30, 0, 1.5);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#185A18";
            Objektorientiert.crc2.arc(this.x + 29, this.y - 4, 25, 3, -1.5);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#185A18";
            Objektorientiert.crc2.arc(this.x - 14, this.y - 19, 16, 4.1, 0.4);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#337245";
            Objektorientiert.crc2.arc(this.x - 3, this.y - 30, 18, 1.3, -3);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            //Blüte
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "white";
            Objektorientiert.crc2.arc(this.x - 10, this.y - 50, 12, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.arc(this.x + 2, this.y - 63, 12, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.arc(this.x + 14, this.y - 50, 12, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.arc(this.x + 2, this.y - 38, 12, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#F5B700";
            Objektorientiert.crc2.arc(this.x + 2, this.y - 50, 10, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
        }
        //Rose
        drawRose() {
            //Stängel
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#03AF00";
            Objektorientiert.crc2.fillRect(this.x, this.y - 40, 4, 40);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            //Blätter  
            Objektorientiert.crc2.fillStyle = "#89FF87";
            Objektorientiert.crc2.arc(this.x + 2, this.y - 29, 15, 0, 1.5);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#64D562";
            Objektorientiert.crc2.arc(this.x + 17, this.y - 13, 15, 3, -1.5);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#64D562";
            Objektorientiert.crc2.arc(this.x - 10, this.y - 12, 11, 4.1, 0.4);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#89FF87";
            Objektorientiert.crc2.arc(this.x - 2, this.y - 19, 13, 1.3, -3);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            //Blüte
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#C4C8E1";
            Objektorientiert.crc2.arc(this.x + 2, this.y - 56, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#C4C8E1";
            Objektorientiert.crc2.arc(this.x + 2, this.y - 33, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#C4C8E1";
            Objektorientiert.crc2.arc(this.x + 15, this.y - 50, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#C4C8E1";
            Objektorientiert.crc2.arc(this.x + 14, this.y - 37, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#C4C8E1";
            Objektorientiert.crc2.arc(this.x - 10, this.y - 50, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#C4C8E1";
            Objektorientiert.crc2.arc(this.x - 9, this.y - 37, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#9FA7DC";
            Objektorientiert.crc2.arc(this.x - 3, this.y - 50, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#9FA7DC";
            Objektorientiert.crc2.arc(this.x + 7, this.y - 50, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#9FA7DC";
            Objektorientiert.crc2.arc(this.x - 3, this.y - 39, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#9FA7DC";
            Objektorientiert.crc2.arc(this.x + 7, this.y - 39, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#9FA7DC";
            Objektorientiert.crc2.arc(this.x - 8, this.y - 45, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#9FA7DC";
            Objektorientiert.crc2.arc(this.x + 12, this.y - 45, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#7C89DF";
            Objektorientiert.crc2.arc(this.x + 2, this.y - 48, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#7C89DF";
            Objektorientiert.crc2.arc(this.x + 2, this.y - 42, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#7C89DF";
            Objektorientiert.crc2.arc(this.x + 6, this.y - 45, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#7C89DF";
            Objektorientiert.crc2.arc(this.x - 2, this.y - 45, 8, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
            Objektorientiert.crc2.beginPath();
            Objektorientiert.crc2.fillStyle = "#596BDB";
            Objektorientiert.crc2.arc(this.x + 2, this.y - 45, 5, 0, 2 * Math.PI);
            Objektorientiert.crc2.closePath();
            Objektorientiert.crc2.fill();
        }
    }
    Objektorientiert.IndividualFlower = IndividualFlower;
})(Objektorientiert || (Objektorientiert = {}));
//# sourceMappingURL=flower.js.map