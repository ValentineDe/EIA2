//Datum: 11.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Objektorientiert {
    
    export class IndividualFlower {
        x: number;
        y: number;
        fillColor: string;
        strokeColor: string;
        color: string;
        
           constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
        
        createRandomFlowerfield(): void {
            
            //Generiere random-Blumenwiese
            for (var i: number = 0; i < 15; i++) { //Insgesamt 15 Durchläufe -> 15 Blumen random generieren
                let blumenWiese: number = Math.floor((Math.random() * 3) + 0); //random-Zahl + 0
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