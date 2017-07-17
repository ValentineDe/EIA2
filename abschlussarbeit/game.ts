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
    
   // export let sheep: SuperBee[] = [];
  //  export let shephard: SuperFlower[] = [];

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //Hintergrund
        let b: Background = new Background();
  
    
    
    
       //Bild wird erstellt
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        //window.setTimeout(animate, 20); //Verzögerung der function um 20sec

  
     } 
    
}