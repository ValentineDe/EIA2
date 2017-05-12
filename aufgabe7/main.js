//Aufgabe: Aufgabe 6a
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 03.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var Objektorientiert;
(function (Objektorientiert) {
    window.addEventListener("load", init);
    let image;
    let n = 10;
    let bees = [];
    let flowers = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        //Himmel und Wiese    
        Objektorientiert.crc2 = canvas.getContext("2d");
        Objektorientiert.crc2.fillStyle = "#56D785";
        Objektorientiert.crc2.fillRect(0, 0, canvas.width, canvas.height);
        Objektorientiert.crc2.fillStyle = "#9DF2F6";
        Objektorientiert.crc2.fillRect(0, 0, canvas.width, 300);
        //Berge, Sonne, Wolken, Baum, Blumen    
        drawMountain(0, 200, "#E4E4E4", "#C1C1C1");
        drawSun(370, 130, "#FFF555");
        drawCloud_1(400, 130, "white");
        drawCloud_2(55, 100, "#F2F2F2");
        drawBienenkorb(430, 500);
        drawTree(480, 290, "#206951", "#2B8B6B");
        //Blumenwiese erstellen
        let f = new Objektorientiert.IndividualFlower(0, 0);
        f.createRandomFlowerfield();
        console.log(flowers);
        //Blumen im Array platzieren und ihnen eine random Position vergeben
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * (400 + 100) - 100;
            let y = Math.random() * (650 - 350) + 350;
            let f = new Objektorientiert.IndividualFlower(x, y); //neue Position für die Blume
            flowers[i] = f;
        }
        //Startposition Biene
        for (let i = 0; i < n; i++) {
            let b = new Objektorientiert.IndividualBee(420, 490, "yellow", (i % 2) == 1); //Jeder Restwert gleich 1 -> true, ungleich 1 -> false = Jede 2. Biene bekommt unterschiedliche Größe
            bees[i] = b;
        }
        window.setTimeout(animate, 20); //Verzögerung der function um 20sec
        canvas.addEventListener("click", drawNewBee); //click auf canvas dann function
        canvas.addEventListener("touch", drawNewBee);
        //Bild wird erstellt
        image = Objektorientiert.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    //Berg       
    function drawMountain(_x, _y, _strokeColor, _fillColor) {
        //Farbverlauf Mountain
        var farbverlauf = Objektorientiert.crc2.createLinearGradient(0, 0, 0, 250);
        farbverlauf.addColorStop("0.4", "white");
        farbverlauf.addColorStop("0.5", "#C1C1C1");
        farbverlauf.addColorStop("1", "#646464");
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = farbverlauf;
        Objektorientiert.crc2.strokeStyle = _strokeColor;
        Objektorientiert.crc2.lineWidth = 2;
        Objektorientiert.crc2.moveTo(_x + 0, _y - 100);
        Objektorientiert.crc2.lineTo(_x + 20, _y - 60);
        Objektorientiert.crc2.lineTo(_x + 50, _y - 10);
        Objektorientiert.crc2.lineTo(_x + 70, _y - 40);
        Objektorientiert.crc2.lineTo(_x + 80, _y - 50);
        Objektorientiert.crc2.lineTo(_x + 100, _y - 30);
        Objektorientiert.crc2.lineTo(_x + 130, _y - 60);
        Objektorientiert.crc2.lineTo(_x + 172, _y - 100);
        Objektorientiert.crc2.lineTo(_x + 190, _y - 130);
        Objektorientiert.crc2.lineTo(_x + 220, _y - 100);
        Objektorientiert.crc2.lineTo(_x + 250, _y - 60);
        Objektorientiert.crc2.lineTo(_x + 280, _y - 70);
        Objektorientiert.crc2.lineTo(_x + 340, _y - 10);
        Objektorientiert.crc2.lineTo(_x + 400, _y - 20);
        Objektorientiert.crc2.lineTo(_x + 450, _y + 30);
        Objektorientiert.crc2.lineTo(_x + 470, _y + 70);
        Objektorientiert.crc2.lineTo(_x + 490, _y + 100);
        Objektorientiert.crc2.lineTo(_x + 0, _y + 100);
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.stroke();
        Objektorientiert.crc2.closePath();
        //Linien im Berg  
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.strokeStyle = _strokeColor;
        Objektorientiert.crc2.moveTo(_x + 100, _y - 30);
        Objektorientiert.crc2.lineTo(_x + 140, _y + 10);
        Objektorientiert.crc2.lineTo(_x + 150, _y + 30);
        Objektorientiert.crc2.moveTo(_x + 250, _y - 60);
        Objektorientiert.crc2.lineTo(_x + 220, _y - 40);
        Objektorientiert.crc2.moveTo(_x + 340, _y - 10);
        Objektorientiert.crc2.lineTo(_x + 320, _y + 10);
        Objektorientiert.crc2.lineTo(_x + 290, _y + 20);
        Objektorientiert.crc2.lineTo(_x + 250, _y + 100);
        Objektorientiert.crc2.stroke();
    }
    //Sonne  
    function drawSun(_x, _y, _fillColor) {
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = _fillColor;
        Objektorientiert.crc2.arc(_x - 15, _y - 65, 50, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
    }
    //Baum    
    function drawTree(_x, _y, _strokeColor, _fillColor) {
        //Stamm
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = "#706B57";
        Objektorientiert.crc2.fillRect(_x, _y, 20, 40);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        //Nadeln
        Objektorientiert.crc2.fillStyle = _fillColor;
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.strokeStyle = _strokeColor;
        Objektorientiert.crc2.moveTo(_x + 60, _y + 0);
        Objektorientiert.crc2.lineTo(_x - 40, _y + 0);
        Objektorientiert.crc2.lineTo(_x + 10, _y - 60);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.stroke();
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.strokeStyle = _strokeColor;
        Objektorientiert.crc2.moveTo(_x + 55, _y - 30);
        Objektorientiert.crc2.lineTo(_x - 32, _y - 30);
        Objektorientiert.crc2.lineTo(_x + 10, _y - 70);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.stroke();
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.strokeStyle = _strokeColor;
        Objektorientiert.crc2.moveTo(_x + 45, _y - 55);
        Objektorientiert.crc2.lineTo(_x - 23, _y - 55);
        Objektorientiert.crc2.lineTo(_x + 10, _y - 100);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.stroke();
    }
    //Wolke groß   
    function drawCloud_1(_x, _y, _fillColor) {
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = _fillColor;
        Objektorientiert.crc2.arc(_x - 15, _y - 65, 18, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.arc(_x - 18, _y - 40, 20, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.arc(_x + 40, _y - 60, 30, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.arc(_x + 12, _y - 75, 25, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.arc(_x + 15, _y - 40, 28, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
    }
    //Wolke klein
    function drawCloud_2(_x, _y, _fillColor) {
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = _fillColor;
        Objektorientiert.crc2.arc(_x - 23, _y - 55, 10, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.arc(_x - 25, _y - 40, 12, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.arc(_x + 20, _y - 53, 15, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.arc(_x + 0, _y - 65, 18, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.arc(_x - 3, _y - 45, 20, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
    }
    function drawBienenkorb(_x, _y) {
        //Bienenkorbmitte
        Objektorientiert.crc2.fillStyle = "#B79600";
        Objektorientiert.crc2.fillRect(_x, _y, 80, 80);
        //Bienenkorbkopf
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = "#B79600";
        Objektorientiert.crc2.arc(_x + 40, _y - 3, 37, 3, 0.1);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        //Linke Seite
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = "#B79600";
        Objektorientiert.crc2.arc(_x + 15, _y + 9, 20, 2, 4.3);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = "#B79600";
        Objektorientiert.crc2.arc(_x + 15, _y + 30, 24, 2, 4.3);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = "#B79600";
        Objektorientiert.crc2.arc(_x + 15, _y + 55, 28, 2, 4.3);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        //rechte Seite
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = "#B79600";
        Objektorientiert.crc2.arc(_x + 65, _y + 9, 20, 5.3, 1);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = "#B79600";
        Objektorientiert.crc2.arc(_x + 65, _y + 30, 24, 5.3, 1);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = "#B79600";
        Objektorientiert.crc2.arc(_x + 64, _y + 56, 28, 5.3, 1);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
        //Eingang
        Objektorientiert.crc2.beginPath();
        Objektorientiert.crc2.fillStyle = "#695305";
        Objektorientiert.crc2.arc(_x + 40, _y + 10, 9, 0, 2 * Math.PI);
        Objektorientiert.crc2.closePath();
        Objektorientiert.crc2.fill();
    }
    //Bienen zitternd fliegen lassen
    function animate() {
        console.log("Animate called");
        //Bild übermalen
        Objektorientiert.crc2.putImageData(image, 0, 0);
        //zufällige Flugrichtung
        for (let i = 0; i < bees.length; i++) {
            let b = bees[i];
            b.move();
            b.drawBee();
        }
        window.setTimeout(animate, 20);
    }
    function drawNewBee() {
        let c;
        let random = Math.round(Math.random());
        if (random == 1) {
            c = true;
        }
        if (random == 0) {
            c = false;
        }
        let bee = new Objektorientiert.IndividualBee(420, 490, "brown", c);
        bees.push(bee);
        n++;
    }
})(Objektorientiert || (Objektorientiert = {}));
//# sourceMappingURL=main.js.map