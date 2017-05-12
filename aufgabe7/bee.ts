//Aufgabe: Aufgabe 7
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 11.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Objektorientiert {
    
    export class IndividualBee {
        x: number;
        y: number;
        size: boolean;
        color: string;

        
        constructor(_x: number, _y: number, _color: string, _size: boolean) {
            console.log("Hey, I'm your Bee!");
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.size = _size;
        }
        
        setStart(): void {
          this.x = 420;
          this.y = 490;
          this.color = "#FFB300";
         } 
        
            move(): void {

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
        
         drawBee(): void {

            if (this.size == false) {
                //Körper
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = this.color;
                crc2.arc(this.x + 30, this.y + 8, 4, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                //Kopf
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "yellow";
                crc2.arc(this.x + 40, this.y + 10, 6, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                //Auge
                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.x + 28, this.y + 8, 1, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                //Streifen
                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.x + 20, this.y + 10, 14, 5.8, 0.4);
                crc2.closePath();
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.x + 24, this.y + 10, 15, 5.8, 0.4);
                crc2.closePath();
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.x + 32, this.y + 10, 12, 5.8, 0.4);
                crc2.closePath();
                crc2.fill();
                //Füße
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.lineWidth = 1;

                crc2.moveTo(this.x + 36, this.y + 16);
                crc2.lineTo(this.x + 38, this.y + 20);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();

                crc2.moveTo(this.x + 45, this.y + 16);
                crc2.lineTo(this.x + 47, this.y + 20);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
                //Fühler
                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.x + 20, this.y + 9, 7, 30, -0.5);
                crc2.closePath();
                crc2.fill();
                //Flügel
                crc2.beginPath();
                crc2.fillStyle = "white";
                crc2.strokeStyle = "black";
                crc2.arc(this.x + 39, this.y - 1, 5, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "white";
                crc2.strokeStyle = "black";
                crc2.arc(this.x + 42, this.y + 0, 5, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
            }
            if (this.size == true) {
                //Körper
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = this.color;
                crc2.arc(this.x + 30, this.y + 8, 6, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                //Kopf
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.fillStyle = "yellow";
                crc2.arc(this.x + 40, this.y + 10, 8, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                //Auge
                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.x + 28, this.y + 8, 2, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                //Streifen
                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.x + 20, this.y + 10, 17, 5.8, 0.4);
                crc2.closePath();
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.x + 24, this.y + 10, 19, 5.8, 0.4);
                crc2.closePath();
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.x + 32, this.y + 10, 15.5, 5.8, 0.4);
                crc2.closePath();
                crc2.fill();
                //Füße
                crc2.beginPath();
                crc2.strokeStyle = "black";
                crc2.lineWidth = 2;

                crc2.moveTo(this.x + 36, this.y + 16);
                crc2.lineTo(this.x + 38, this.y + 22);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();

                crc2.moveTo(this.x + 45, this.y + 16);
                crc2.lineTo(this.x + 47, this.y + 22);
                crc2.fill();
                crc2.stroke();
                crc2.closePath();
                //Fühler
                crc2.beginPath();
                crc2.fillStyle = "black";
                crc2.arc(this.x + 20, this.y + 9, 10, 30, -0.5);
                crc2.closePath();
                crc2.fill();
                //Flügel
                crc2.beginPath();
                crc2.fillStyle = "white";
                crc2.strokeStyle = "black";
                crc2.arc(this.x + 39, this.y - 1, 6, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
                crc2.beginPath();
                crc2.fillStyle = "white";
                crc2.strokeStyle = "black";
                crc2.arc(this.x + 42, this.y + 0, 6, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.stroke();
                crc2.fill();
            }
        }
        
}
}