//Aufgabe: Abschlussaufgabe
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.07.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace GAME {

    export class FlowersRight {
        x: number;
        y: number;

        constructor() {
            this.setRandomPosition();
        }
        
        drawFlower(): void {

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
        
         setRandomPosition(): void {
            this.x = Math.floor(Math.random() * (890 - 850)) + 850; 
            this.y = Math.floor(Math.random() * (1500 - 30)) + 30; 
        }
    }
}
