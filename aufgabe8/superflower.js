//Aufgabe: Aufgabe 8
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var VL8;
(function (VL8) {
    class SuperFlower {
        constructor() {
            this.setRandomPosition();
        }
        draw() { }
        setRandomPosition() {
            this.x = Math.floor(Math.random() * (40 - 450)) + 450; //Blumen werden auf einer Breite von 420px generiert. Vom rechten Rand zum linken Rand.
            this.y = Math.floor(Math.random() * (650 - 350)) + 350; //Blumen werden in einer Höhe bis zu 300 px generiert. Vom unteren Rand bis zu oberen Rand.
        }
    }
    VL8.SuperFlower = SuperFlower;
})(VL8 || (VL8 = {}));
//# sourceMappingURL=superflower.js.map