//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace VL8 {

    export class SuperFlower {
        x: number;
        y: number;
        fillColor: string;
        strokeColor: string;
        color: string;

        constructor() {
            this.setRandomPosition();
        }

        draw(): void { }

        setRandomPosition(): void {

            this.x = Math.floor(Math.random() * (40 - 450)) + 450; //Blumen werden auf einer Breite von 420px generiert. Vom rechten Rand zum linken Rand.
            this.y = Math.floor(Math.random() * (650 - 350)) + 350; //Blumen werden in einer Höhe bis zu 300 px generiert. Vom unteren Rand bis zu oberen Rand.
        }
    }
}