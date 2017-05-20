//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace VL8 {

    export class Landscape {

        constructor() {

            //Himmel und Wiese  
            crc2.fillStyle = "#56D785";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.fillStyle = "#9DF2F6";
            crc2.fillRect(0, 0, crc2.canvas.width, 300);

            //Berge, Sonne, Wolken, Baum, Blumen    
            this.drawMountain(0, 200, "#E4E4E4", "#C1C1C1");
            this.drawSun(370, 130, "#FFF555");
            this.drawCloud_1(400, 130, "white");
            this.drawCloud_2(55, 100, "#F2F2F2");
            this.drawBienenkorb(430, 500);
            this.drawTree(480, 290, "#206951", "#2B8B6B");
        }

        //Berg       
        drawMountain(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

            //Farbverlauf Mountain
            var farbverlauf: any = crc2.createLinearGradient(0, 0, 0, 250);
            farbverlauf.addColorStop("0.4", "white");
            farbverlauf.addColorStop("0.5", "#C1C1C1");
            farbverlauf.addColorStop("1", "#646464");

            crc2.beginPath();
            crc2.fillStyle = farbverlauf;
            crc2.strokeStyle = _strokeColor;
            crc2.lineWidth = 2;

            crc2.moveTo(_x + 0, _y - 100);
            crc2.lineTo(_x + 20, _y - 60);
            crc2.lineTo(_x + 50, _y - 10);
            crc2.lineTo(_x + 70, _y - 40);
            crc2.lineTo(_x + 80, _y - 50);
            crc2.lineTo(_x + 100, _y - 30);
            crc2.lineTo(_x + 130, _y - 60);
            crc2.lineTo(_x + 172, _y - 100);
            crc2.lineTo(_x + 190, _y - 130);
            crc2.lineTo(_x + 220, _y - 100);
            crc2.lineTo(_x + 250, _y - 60);
            crc2.lineTo(_x + 280, _y - 70);
            crc2.lineTo(_x + 340, _y - 10);
            crc2.lineTo(_x + 400, _y - 20);
            crc2.lineTo(_x + 450, _y + 30);
            crc2.lineTo(_x + 470, _y + 70);
            crc2.lineTo(_x + 490, _y + 100);
            crc2.lineTo(_x + 0, _y + 100);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Linien im Berg  
            crc2.beginPath();
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x + 100, _y - 30);
            crc2.lineTo(_x + 140, _y + 10);
            crc2.lineTo(_x + 150, _y + 30);
            crc2.moveTo(_x + 250, _y - 60);
            crc2.lineTo(_x + 220, _y - 40);
            crc2.moveTo(_x + 340, _y - 10);
            crc2.lineTo(_x + 320, _y + 10);
            crc2.lineTo(_x + 290, _y + 20);
            crc2.lineTo(_x + 250, _y + 100);
            crc2.stroke();
        }

        //Sonne  
        drawSun(_x: number, _y: number, _fillColor: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(_x - 15, _y - 65, 50, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

        //Baum    
        drawTree(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

            //Stamm
            crc2.beginPath();
            crc2.fillStyle = "#706B57";
            crc2.fillRect(_x, _y, 20, 40);
            crc2.closePath();
            crc2.fill();
            //Nadeln
            crc2.fillStyle = _fillColor;
            crc2.beginPath();
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x + 60, _y + 0);
            crc2.lineTo(_x - 40, _y + 0);
            crc2.lineTo(_x + 10, _y - 60);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x + 55, _y - 30);
            crc2.lineTo(_x - 32, _y - 30);
            crc2.lineTo(_x + 10, _y - 70);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x + 45, _y - 55);
            crc2.lineTo(_x - 23, _y - 55);
            crc2.lineTo(_x + 10, _y - 100);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }

        //Wolke groß   
        drawCloud_1(_x: number, _y: number, _fillColor: string): void {

            crc2.beginPath();
            crc2.fillStyle = _fillColor;

            crc2.arc(_x - 15, _y - 65, 18, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.arc(_x - 18, _y - 40, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(_x + 40, _y - 60, 30, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(_x + 12, _y - 75, 25, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(_x + 15, _y - 40, 28, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

        //Wolke klein
        drawCloud_2(_x: number, _y: number, _fillColor: string): void {

            crc2.beginPath();
            crc2.fillStyle = _fillColor;

            crc2.arc(_x - 23, _y - 55, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.arc(_x - 25, _y - 40, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(_x + 20, _y - 53, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(_x + 0, _y - 65, 18, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.arc(_x - 3, _y - 45, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

        drawBienenkorb(_x: number, _y: number): void {

            //Bienenkorbmitte
            crc2.fillStyle = "#B79600";
            crc2.fillRect(_x, _y, 80, 80);
            //Bienenkorbkopf
            crc2.beginPath();
            crc2.fillStyle = "#B79600";
            crc2.arc(_x + 40, _y - 3, 37, 3, 0.1);
            crc2.closePath();
            crc2.fill();
            //Linke Seite
            crc2.beginPath();
            crc2.fillStyle = "#B79600";
            crc2.arc(_x + 15, _y + 9, 20, 2, 4.3);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#B79600";
            crc2.arc(_x + 15, _y + 30, 24, 2, 4.3);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#B79600";
            crc2.arc(_x + 15, _y + 55, 28, 2, 4.3);
            crc2.closePath();
            crc2.fill();
            //rechte Seite
            crc2.beginPath();
            crc2.fillStyle = "#B79600";
            crc2.arc(_x + 65, _y + 9, 20, 5.3, 1);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#B79600";
            crc2.arc(_x + 65, _y + 30, 24, 5.3, 1);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#B79600";
            crc2.arc(_x + 64, _y + 56, 28, 5.3, 1);
            crc2.closePath();
            crc2.fill();
            //Eingang
            crc2.beginPath();
            crc2.fillStyle = "#695305";
            crc2.arc(_x + 40, _y + 10, 9, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

    }
}   