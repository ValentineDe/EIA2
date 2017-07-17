//Aufgabe: Abschlussaufgabe
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace GAME {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let image: ImageData;
    let n: number = 5;
    var dragok: boolean = false;


    export let sheep: SuperSheep[] = [];

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //Hintergrund
        let b: Background = new Background();



        for (let i: number = 0; i < 4; i++) {
            let bsheep: BlackSheep = new BlackSheep();
            sheep.push(bsheep);
            console.log(bsheep);
            sheep[i].draw();
        }

        for (let i: number = 0; i < 4; i++) {
            let wsheep: WhiteSheep = new WhiteSheep();
            sheep.push(wsheep);
            console.log(wsheep);
            sheep[i].draw();
        }
        
        
        
        //Bild wird erstellt
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
      
        
        ////Maus-Position getrackt
        
        canvas.addEventListener("mousedown", trackPosition, true);

        function trackPosition(event: MouseEvent): void {
            var x: number = event.x;
            var y: number = event.y;

            x -= canvas.offsetLeft;
            y -= canvas.offsetTop;

            alert("x=" + x + " y=" + y);

        }
    }
}





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














