//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace VL8 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let image: ImageData;
    let n: number = 5;

    export let bees: SuperBee[] = [];
    export let flowers: SuperFlower[] = [];

    function init(_event: Event): void {


        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //Hintergrund
        let l: Landscape = new Landscape();

        //Blumenwiese erstellen

        //Random Tulips
        for (var i: number = 0; i < 5; i++) {
            let rt: Tulip = new Tulip();
            rt.draw();
        }

        //Random Daisys
        for (var i: number = 0; i < 5; i++) {
            let rd: Daisy = new Daisy();
            rd.draw();
        }

        //Blumen im Array platzieren und ihnen eine random Position vergeben
        for (let i: number = 0; i < 8; i++) {   //8 Blumen befinden sich im Array
            let hf: Rose = new Rose();
            flowers.push(hf);
            console.log(hf);
            flowers[i].draw();
        }
        
        //Startposition Biene
        for (let i: number = 0; i < n; i++) {
            let b: SuperBee = new SuperBee(420, 490, "yellow", (i % 2) == 1); //Jeder Restwert gleich 1 -> true, ungleich 1 -> false = Jede 2. Biene bekommt unterschiedliche Größe
            bees.push(b);
            var h: HoneyBee = new HoneyBee(420, 490, "yellow", (i % 2) == 1);
            bees.push(h);
        }

        //Bild wird erstellt
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        window.setTimeout(animate, 20); //Verzögerung der function um 20sec
        canvas.addEventListener("click", drawNewBee); //click auf canvas dann function
        canvas.addEventListener("touch", drawNewBee);

    }

    //Funktionen////////////////////////////////////////////////////////////////////////////////////////

    //Biene zitternd fliegen lassen
    function animate(): void {
        console.log("Animate called");
    
        //Bild übermalen
        crc2.putImageData(image, 0, 0);

        //zufällige Flugrichtung
        for (let i: number = 0; i < bees.length; i++) {
            let b: SuperBee = bees[i];
            b.move();
            b.drawBee();
        }

        window.setTimeout(animate, 20);
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
        let bee: SuperBee = new SuperBee(420, 490, "brown", c);
        bees.push(bee);
        n++;
    }
}