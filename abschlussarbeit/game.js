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
    let n = 5;
    var dragok = false;
    GAME.sheep = [];
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        GAME.crc2 = canvas.getContext("2d");
        //Hintergrund
        let b = new GAME.Background();
        for (let i = 0; i < 4; i++) {
            let bsheep = new GAME.BlackSheep();
            GAME.sheep.push(bsheep);
            console.log(bsheep);
            GAME.sheep[i].draw();
        }
        for (let i = 0; i < 4; i++) {
            let wsheep = new GAME.WhiteSheep();
            GAME.sheep.push(wsheep);
            console.log(wsheep);
            GAME.sheep[i].draw();
        }
        //Bild wird erstellt
        image = GAME.crc2.getImageData(0, 0, canvas.width, canvas.height);
        ////Maus-Position getrackt
        canvas.addEventListener("mousedown", trackPosition, true);
        function trackPosition(event) {
            var x = event.x;
            var y = event.y;
            x -= canvas.offsetLeft;
            y -= canvas.offsetTop;
            alert("x=" + x + " y=" + y);
        }
    }
})(GAME || (GAME = {}));
//function myMove(e){
// if (dragok){
//  x = e.pageX - canvas.offsetLeft;
//  y = e.pageY - canvas.offsetTop;
// }
//}
//
//function myDown(e){
// if (e.pageX < x + 15 + canvas.offsetLeft && e.pageX > x - 15 +
// canvas.offsetLeft && e.pageY < y + 15 + canvas.offsetTop &&
// e.pageY > y -15 + canvas.offsetTop){
//  x = e.pageX - canvas.offsetLeft;
//  y = e.pageY - canvas.offsetTop;
//  dragok = true;
//  canvas.onmousemove = myMove;
// }
//}
//
//function myUp(){
// dragok = false;
// canvas.onmousemove = null;
//}
//
//init();
//canvas.onmousedown = myDown;
//canvas.onmouseup = myUp;
//# sourceMappingURL=game.js.map