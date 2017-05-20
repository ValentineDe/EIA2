//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var VL8;
(function (VL8) {
    class HoneyBee extends VL8.SuperBee {
        constructor(_x, _y, _color, _size) {
            super(_x, _y, _color, _size);
            this.setRandomFlowerTarget();
            this.setStartPosition();
        }
        setStartPosition() {
            this.x = 420;
            this.y = 490;
        }
        setRandomFlowerTarget() {
            let randomtargetflower = Math.round(Math.random() * (VL8.flowers.length - 1));
            this.xtarget = VL8.flowers[randomtargetflower].x;
            this.ytarget = VL8.flowers[randomtargetflower].y;
        }
        move() {
            let xDiff = this.xtarget - this.x;
            let yDiff = this.ytarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomFlowerTarget();
            else {
                this.x += xDiff;
                this.y += yDiff;
            }
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
    VL8.HoneyBee = HoneyBee;
})(VL8 || (VL8 = {}));
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
//# sourceMappingURL=honeybee.js.map