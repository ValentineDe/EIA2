//Aufgabe: Aufgabe 6a
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 03.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
namespace L4_Canvas {
    window.addEventListener("load", init);

    let crc2: CanvasRenderingContext2D;
    let image: ImageData; // image als ImageData deklarieren  

    interface IndividualBee {
        x: number; //x-Koordinten
        y: number; //y-Koordinaten
        size: boolean;
        color: string;
    }

    let n: number = 10; //Anzahl Bienenschwarm
    let bees: IndividualBee[] = [];

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];

        //Himmel und Wiese    
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#56D785";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#9DF2F6";
        crc2.fillRect(0, 0, canvas.width, 300);

        //Berge, Sonne, Wolken, Baum, Blumen    
        drawMountain(0, 200, "#E4E4E4", "#C1C1C1");
        drawSun(370, 130, "#FFF555");
        drawCloud_1(400, 130, "white");
        drawCloud_2(55, 100, "#F2F2F2");
        drawTulip(100, 600, "#FF5735", "#FF856C");
        drawDaisy(300, 600);
        drawRose(100, 400);
        drawBienenkorb(430, 500);
        drawTree(480, 290, "#206951", "#2B8B6B");


        //Generiere random-Blumenwiese
        for (var i: number = 0; i < 15; i++) { //Insgesamt 15 Durchläufe -> 15 Blumen random generieren
            let blumenWiese: number = Math.floor((Math.random() * 3) + 0); //random-Zahl + 0
            let _x: number = Math.floor(Math.random() * (400 + 100)) - 100; //Blumen werden auf einer Breite von 420px generiert. Vom rechten Rand zum linken Rand.
            let _y: number = Math.floor(Math.random() * (650 - 350)) + 350; //Blumen werden in einer Höhe bis zu 300 px generiert. Vom unteren Rand bis zu oberen Rand.

            switch (blumenWiese) {
                case 0:
                    drawTulip(_x, _y, "#FF5735", "#FF856C");
                    break;
                case 1:
                    drawRose(_x, _y);
                    break;
                case 2:
                    drawDaisy(_x, _y);
                    break;
            }
        }

        //Bild wird erstellt
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Startpunkt Bienen am Bienenstock
        for (let i: number = 0; i < n; i++) {
            let a: boolean;
            let random: number = Math.round(Math.random());
            if (random == 1) {
                a = true;
            }
            if (random == 0) {
                a = false;
            }
            let b: IndividualBee = { x: 0, y: 0, size: a, color: "" };
            b.x = 420;
            b.y = 490;
            b.color = "#FFB300";
            bees[i] = b;
        }
        window.setTimeout(animate, 20); //Verzögerung der function um 20sec
        canvas.addEventListener("click", drawNewBee); //click auf canvas dann function
        canvas.addEventListener("touch", drawNewBee);
    }

    //Berg       
    function drawMountain(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

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
    function drawSun(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x - 15, _y - 65, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    //Baum    
    function drawTree(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

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
    function drawCloud_1(_x: number, _y: number, _fillColor: string): void {

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
    function drawCloud_2(_x: number, _y: number, _fillColor: string): void {

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
    //Tulpe
    function drawTulip(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

        //Stängel
        crc2.beginPath();
        crc2.fillStyle = "#579200";
        crc2.fillRect(_x, _y - 40, 4, 40);
        crc2.closePath();
        crc2.fill();
        //Blätter  
        crc2.fillStyle = "#457200";
        crc2.arc(_x - 1, _y - 29, 30, 0, 1.5);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#457200";
        crc2.arc(_x - 3, _y - 18, 18, 1.3, - 3);
        crc2.closePath();
        crc2.fill();
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 1, _y - 58, 18, 0, - 3.1);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 16, _y - 58);
        crc2.lineTo(_x - 16, _y - 70);
        crc2.lineTo(_x - 10, _y - 59);
        crc2.lineTo(_x - 4, _y - 72);
        crc2.lineTo(_x + 2, _y - 59);
        crc2.lineTo(_x + 8, _y - 72);
        crc2.lineTo(_x + 12, _y - 59);
        crc2.lineTo(_x + 18, _y - 72);
        crc2.lineTo(_x + 18, _y - 57);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
    //Gänseblümchen
    function drawDaisy(_x: number, _y: number): void {

        //Stängel
        crc2.beginPath();
        crc2.fillStyle = "#185A18";
        crc2.fillRect(_x, _y - 43, 4, 60);
        crc2.closePath();
        crc2.fill();
        //Blätter  
        crc2.fillStyle = "#337245";
        crc2.arc(_x - 1, _y - 29, 30, 0, 1.5);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#185A18";
        crc2.arc(_x + 29, _y - 4, 25, 3, -1.5);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#185A18";
        crc2.arc(_x - 14, _y - 19, 16, 4.1, 0.4);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#337245";
        crc2.arc(_x - 3, _y - 30, 18, 1.3, - 3);
        crc2.closePath();
        crc2.fill();
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.arc(_x - 10, _y - 50, 12, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.arc(_x + 2, _y - 63, 12, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.arc(_x + 14, _y - 50, 12, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.arc(_x + 2, _y - 38, 12, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#F5B700";
        crc2.arc(_x + 2, _y - 50, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    //Rose
    function drawRose(_x: number, _y: number): void {

        //Stängel
        crc2.beginPath();
        crc2.fillStyle = "#03AF00";
        crc2.fillRect(_x, _y - 40, 4, 40);
        crc2.closePath();
        crc2.fill();
        //Blätter  
        crc2.fillStyle = "#89FF87";
        crc2.arc(_x + 2, _y - 29, 15, 0, 1.5);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#64D562";
        crc2.arc(_x + 17, _y - 13, 15, 3, -1.5);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#64D562";
        crc2.arc(_x - 10, _y - 12, 11, 4.1, 0.4);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#89FF87";
        crc2.arc(_x - 2, _y - 19, 13, 1.3, - 3);
        crc2.closePath();
        crc2.fill();
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = "#C4C8E1";
        crc2.arc(_x + 2, _y - 56, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#C4C8E1";
        crc2.arc(_x + 2, _y - 33, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#C4C8E1";
        crc2.arc(_x + 15, _y - 50, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#C4C8E1";
        crc2.arc(_x + 14, _y - 37, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#C4C8E1";
        crc2.arc(_x - 10, _y - 50, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#C4C8E1";
        crc2.arc(_x - 9, _y - 37, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#9FA7DC";
        crc2.arc(_x - 3, _y - 50, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#9FA7DC";
        crc2.arc(_x + 7, _y - 50, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#9FA7DC";
        crc2.arc(_x - 3, _y - 39, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#9FA7DC";
        crc2.arc(_x + 7, _y - 39, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#9FA7DC";
        crc2.arc(_x - 8, _y - 45, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#9FA7DC";
        crc2.arc(_x + 12, _y - 45, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#7C89DF";
        crc2.arc(_x + 2, _y - 48, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#7C89DF";
        crc2.arc(_x + 2, _y - 42, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#7C89DF";
        crc2.arc(_x + 6, _y - 45, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#7C89DF";
        crc2.arc(_x - 2, _y - 45, 8, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#596BDB";
        crc2.arc(_x + 2, _y - 45, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }

    //Bienen zitternd fliegen lassen
    function animate(): void {
        console.log("Animate called");

        //Bild übermalen
        crc2.putImageData(image, 0, 0);

        //zufällige Flugrichtung
        for (let i: number = 0; i < n; i++) {
            let b: IndividualBee = bees[i];
            b.x += Math.random() * 5 - 4; //Bewegungsfreiraum von -5 und 5. Zug nach -4.
            b.y += Math.random() * 9 - 4.5; //Bewegungsfreiraum von -9 und 9. Zug nach -4.5.

            //Wenn Bienen über den Rand fliegen
            if (b.x >= 565)
                b.x = -5;
            if (b.y <= 5)
                b.y = 645;
            if (b.x < -5)
                b.x = 565;
            if (b.y > 645)
                b.y = 5;

            drawBee(b.x, b.y, b.size, b.color); //Bienen mit den neuen Koordinatendaten i zeichnen
        }

        window.setTimeout(animate, 20);
    }

    function drawBee(_x: number, _y: number, _size: boolean, _color: string): void {


        if (_size == false) {
            //Körper
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = _color;
            crc2.arc(_x + 30, _y + 8, 4, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Kopf
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "yellow";
            crc2.arc(_x + 40, _y + 10, 6, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Auge
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 28, _y + 8, 1, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Streifen
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 20, _y + 10, 14, 5.8, 0.4);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 24, _y + 10, 15, 5.8, 0.4);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 32, _y + 10, 12, 5.8, 0.4);
            crc2.closePath();
            crc2.fill();
            //Füße
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.lineWidth = 1;

            crc2.moveTo(_x + 36, _y + 16);
            crc2.lineTo(_x + 38, _y + 20);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.moveTo(_x + 45, _y + 16);
            crc2.lineTo(_x + 47, _y + 20);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Fühler
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 20, _y + 9, 7, 30, -0.5);
            crc2.closePath();
            crc2.fill();
            //Flügel
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.strokeStyle = "black";
            crc2.arc(_x + 39, _y - 1, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.strokeStyle = "black";
            crc2.arc(_x + 42, _y + 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        if (_size == true) {
            //Körper
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = _color;
            crc2.arc(_x + 30, _y + 8, 6, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Kopf
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "yellow";
            crc2.arc(_x + 40, _y + 10, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Auge
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 28, _y + 8, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            //Streifen
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 20, _y + 10, 17, 5.8, 0.4);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 24, _y + 10, 19, 5.8, 0.4);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 32, _y + 10, 15.5, 5.8, 0.4);
            crc2.closePath();
            crc2.fill();
            //Füße
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;

            crc2.moveTo(_x + 36, _y + 16);
            crc2.lineTo(_x + 38, _y + 22);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.moveTo(_x + 45, _y + 16);
            crc2.lineTo(_x + 47, _y + 22);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Fühler
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(_x + 20, _y + 9, 10, 30, -0.5);
            crc2.closePath();
            crc2.fill();
            //Flügel
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.strokeStyle = "black";
            crc2.arc(_x + 39, _y - 1, 6, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.strokeStyle = "black";
            crc2.arc(_x + 42, _y + 0, 6, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }

    function drawBienenkorb(_x: number, _y: number): void {

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
    function drawNewBee(): void {
        let c: boolean;
        let random: number = Math.round(Math.random());
        if (random == 1) {
            c = true;
        }
        if (random == 0) {
            c = false;
        }
        let bee: IndividualBee = { x: 0, y: 0, size: c, color: "" };
        bee.x = 450;
        bee.y = 499;
        bee.color = "yellow";
        bees.push(bee);
        n++;
    }
} 