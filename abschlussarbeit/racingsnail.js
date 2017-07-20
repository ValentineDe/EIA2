//Aufgabe: Abschlussaufgabe
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.07.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var GAME;
(function (GAME) {
    //RacingSnail ist eine Subklasse der Superklasse SuperSnail
    class RacingSnail extends GAME.SuperSnail {
        constructor(_x, _y, _fillColor, _speed) {
            super(_x, _y, _fillColor, _speed);
        }
        update() {
            this.draw();
        }
        //random Schnelligkeit
        move() {
            this.y += Math.random() * 5 + 18;
        }
    }
    GAME.RacingSnail = RacingSnail;
})(GAME || (GAME = {}));
//# sourceMappingURL=racingsnail.js.map