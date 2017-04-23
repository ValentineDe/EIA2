//Aufgabe: Aufgabe 4
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 23.04.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

var L4_Canvas;
(function (L4_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas;
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
        //    drawSunflower(500, 600, "yellow", "orange");
        drawTree(480, 290, "#206951", "#2B8B6B");
        //Generiere random-Blumenwiese
        for (var i = 0; i < 15; i++) {
            let blumenWiese = Math.floor((Math.random() * 3) + 0); //random-Zahl + 0
            let _x = Math.floor(Math.random() * (570 - 150)) + 150; //Blumen werden auf einer Breite von 420px generiert. Vom rechten Rand zum linken Rand.
            let _y = Math.floor(Math.random() * (650 - 350)) + 350; //Blumen werden in einer Höhe bis zu 300 px generiert. Vom unteren Rand bis zu oberen Rand.
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
    }
    //Berg       
    function drawMountain(_x, _y, _strokeColor, _fillColor) {
        //Farbverlauf Mountain
        var farbverlauf = crc2.createLinearGradient(0, 0, 0, 250);
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
    function drawSun(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x - 15, _y - 65, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    //Baum    
    function drawTree(_x, _y, _strokeColor, _fillColor) {
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
    function drawCloud_1(_x, _y, _fillColor) {
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
    function drawCloud_2(_x, _y, _fillColor) {
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
    function drawTulip(_x, _y, _strokeColor, _fillColor) {
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
        crc2.arc(_x - 3, _y - 18, 18, 1.3, -3);
        crc2.closePath();
        crc2.fill();
        //Blüte
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 1, _y - 58, 18, 0, -3.1);
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
    function drawDaisy(_x, _y) {
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
        crc2.arc(_x - 3, _y - 30, 18, 1.3, -3);
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
    function drawRose(_x, _y) {
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
        crc2.arc(_x - 2, _y - 19, 13, 1.3, -3);
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
})(L4_Canvas || (L4_Canvas = {}));
//# sourceMappingURL=blumenwiese.js.map