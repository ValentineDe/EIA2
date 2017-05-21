//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var VL8;
(function (VL8) {
    window.addEventListener("load", init);
    let image;
    let n = 5;
    VL8.bees = [];
    VL8.flowers = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        VL8.crc2 = canvas.getContext("2d");
        //Hintergrund
        let l = new VL8.Landscape();
        //Blumenwiese erstellen
        //Random Tulips
        for (var i = 0; i < 5; i++) {
            let rt = new VL8.Tulip();
            rt.draw();
        }
        //Random Daisys
        for (var i = 0; i < 5; i++) {
            let rd = new VL8.Daisy();
            rd.draw();
        }
        //Blumen im Array platzieren und ihnen eine random Position vergeben
        for (let i = 0; i < 8; i++) {
            let hf = new VL8.Rose();
            VL8.flowers.push(hf);
            console.log(hf);
            VL8.flowers[i].draw();
        }
        //Startposition Biene
        for (let i = 0; i < n; i++) {
            let b = new VL8.SuperBee(420, 490, "yellow", (i % 2) == 1); //Jeder Restwert gleich 1 -> true, ungleich 1 -> false = Jede 2. Biene bekommt unterschiedliche Größe
            VL8.bees.push(b);
            var h = new VL8.HoneyBee(420, 490, "yellow", (i % 2) == 1);
            VL8.bees.push(h);
        }
        //Bild wird erstellt
        image = VL8.crc2.getImageData(0, 0, canvas.width, canvas.height);
        window.setTimeout(animate, 20); //Verzögerung der function um 20sec
        canvas.addEventListener("click", drawNewBee); //click auf canvas dann function
        canvas.addEventListener("touch", drawNewBee);
    }
    //Funktionen////////////////////////////////////////////////////////////////////////////////////////
    //Biene zitternd fliegen lassen
    function animate() {
        console.log("Animate called");
        //Bild übermalen
        VL8.crc2.putImageData(image, 0, 0);
        //zufällige Flugrichtung
        for (let i = 0; i < VL8.bees.length; i++) {
            let b = VL8.bees[i];
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
        let bee = new VL8.SuperBee(420, 490, "brown", c);
        VL8.bees.push(bee);
        n++;
    }
})(VL8 || (VL8 = {}));
//# sourceMappingURL=main.js.map