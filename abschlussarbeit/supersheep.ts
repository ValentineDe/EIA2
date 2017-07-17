//Aufgabe: A
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace GAME {

    export class SuperSheep {
        x: number;
        y: number;
        size: boolean;
        fillColor: string;

        constructor() {
            console.log("Hey, I'm your Sheep!");
            this.setRandomPosition();
        }

        draw(): void { }

        setRandomPosition(): void {

            this.x = Math.floor(Math.random() * (700 - 40)) + 40; 
            this.y = Math.floor(Math.random() * (1200 - 400)) + 400; 
        }    
    }
}