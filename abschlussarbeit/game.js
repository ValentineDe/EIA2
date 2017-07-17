//Aufgabe: Abschlussaufgabe
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var GAME;
(function (GAME) {
    window.addEventListener("load", init);
    let image;
    // export let sheep: SuperBee[] = [];
    //  export let shephard: SuperFlower[] = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        GAME.crc2 = canvas.getContext("2d");
        //Hintergrund
        let b = new GAME.Background();
        //Bild wird erstellt
        image = GAME.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //window.setTimeout(animate, 20); //Verzögerung der function um 20sec
    }
})(GAME || (GAME = {}));
//# sourceMappingURL=game.js.map