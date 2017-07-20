//Aufgabe: Abschlussaufgabe
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.07.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace GAME {

    //RacingSnail ist eine Subklasse der Superklasse SuperSnail
    export class RacingSnail extends SuperSnail {
        currentX: number;
        currentY: number;

        constructor(_x: number, _y: number, _fillColor: string, _speed: number) {
            super(_x, _y, _fillColor, _speed);
        }

        update(): void {
            this.draw();
        }
        
        //random Schnelligkeit
        move(): void {
            this.y += Math.random() * 5 + 18;
        }
    }
}
