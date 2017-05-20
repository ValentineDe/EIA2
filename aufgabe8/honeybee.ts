//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace VL8 {
    export class HoneyBee extends SuperBee {
        xtarget: number;
        ytarget: number;

        constructor(_x: number, _y: number, _color: string, _size: boolean) {
            super(_x, _y, _color, _size);
            this.setRandomFlowerTarget();
            this.setStartPosition();
        }

        setStartPosition(): void {
            this.x = 420;
            this.y = 490;
        }

        setRandomFlowerTarget(): void {
            let randomtargetflower: number = Math.round(Math.random() * (flowers.length - 1));
            this.xtarget = flowers[randomtargetflower].x;
            this.ytarget = flowers[randomtargetflower].y;
        }

        move(): void {
            let xDiff: number = this.xtarget - this.x;
            let yDiff: number = this.ytarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomFlowerTarget();
            else {
                this.x += xDiff;
                this.y += yDiff;
            }
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



//    export class HoneyBee extends IndividualBee {
//        xtarget: number;
//        ytarget: number;
//        size: boolean;
//        color: string;
//        gohome: boolean;
//        task: string;
//        random: number;
//        nectar: number;
//        stopp: number;
//
//        constructor(_x: number, _y: number, _color: string, _size: boolean, gohome: boolean, task: string, random: number, nectar: number) {
//            super(_x, _y, _color, _size);
//            this.setStart();
//            this.setRandomFlowerTarget();
//            this.gohome = false;
//            this.stopp = 0;
//            this.nectar = 0;
//        }
//
//        setRandomFlowerTarget(): void {
//            this.random = Math.round(Math.random() * 5);
//            let targetflower: IndividalFlower = flowers[this.random];
//            this.xtarget = targetflower.xposition;
//            this.ytarget = targetflower.yposition;
//        }
//
//        flyToTargetFlower(_i: number): void {
//            if (this.gohome == true && this.stopp == 0) {
//
//                let xDiff: number = this.xtarget - this.xposition;
//                let yDiff: number = this.ytarget - this.yposition;
//                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
//                    this.stopp = 1;
//                    this.gohome = false;
//                    this.xtarget = 320;
//                    this.ytarget = 115;
//                    this.nectar = 95;
//                    this.task = "refill nectar " + this.nectar + "%";
//                }
//                else {
//                    this.xposition += xDiff;
//                    this.yposition += yDiff;
//                    this.task = "fly home" + "  " + this.nectar + "%";
//                }
//            }
//
//            if (this.gohome == false && this.stopp == 0) {
//                let xDiff: number = this.xtarget - this.xposition;
//                let yDiff: number = this.ytarget - this.yposition;
//                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
//                    this.stopp = 1;
//                    this.gohome = true;
//                    this.setRandomFlowerTarget();
//                    this.nectar = 5;
//                    this.task = "vomit " + this.nectar + "%";
//                }
//                else {
//                    this.xposition += xDiff * this.speed;
//                    this.yposition += yDiff * this.speed;
//                    this.task = "fly to Flower" + String(this.random + 1) + "  " + this.nectar + "%";
//                }
//
//            }
//
//        }
//    }
//}    