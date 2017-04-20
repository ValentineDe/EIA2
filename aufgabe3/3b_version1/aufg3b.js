//Aufgabe: Aufgabe 3b
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 09.04.2017
//    
//Dieser Code wurde mit Hilfe von Salome Weißer, Janett Stüwe und Nadine Malinowski geschrieben.
//Er wurde verstanden und umgeschrieben.
var MauMau;
(function (MauMau) {
    let deck; // deck ist ein HTMLElement
    let spielkarten; // Spielkarten werden in ein Arry gegeben
    let hand; // innerhalb der Hand gibt es div Elemente im HTML
    let ablage; //ablage ist ein div Element im HTML
    document.addEventListener("DOMContentLoaded", function () {
        deck = document.getElementById("Nachziehstapel");
        deck.addEventListener("click", addToHandkarten);
        spielkarten = [
            "Karo7",
            "Karo8",
            "Karo9",
            "Karo10",
            "KaroBube",
            "KaroDame",
            "KaroKoenig",
            "KaroAss",
            "Herz7",
            "Herz8",
            "Herz9",
            "Herz10",
            "HerzBube",
            "HerzDame",
            "HerzKoenig",
            "HerzAss",
            "Piek7",
            "Piek8",
            "Piek9",
            "Piek10",
            "PiekBube",
            "PiekDame",
            "PiekKoenig",
            "PiekAss",
            "Kreuz7",
            "Kreuz8",
            "Kreuz9",
            "Kreuz10",
            "KreuzBube",
            "KreuzDame",
            "KreuzKoenig",
            "KreuzAss"
        ];
        //Der Arry der Hand beginnt anfangs bei 0. Bei "Click" auf Karten in der Hand wird Funktion addToAblagestapel ausgeführt
        hand = document.getElementsByClassName("Handkarten");
        for (let x = 0; x < hand.length; x++) {
            hand[x].addEventListener("click", addToAblagestapel);
        }
        ablage = document.getElementById("Ablagestapel");
    });
    //Teil1: Erstelle "Hand" und bei "Click" füge ihm eine random-Karte aus dem Deck hinzu und lösche diese dann aus dem Array im Deck. Maximal 5 Karten auf der Hand.
    function addToHandkarten() {
        let randomCard = spielkarten.splice(Math.round(Math.random() * (spielkarten.length - 1)), 1)[0];
        let zustandHand = addToLeereHand();
        if (zustandHand != null) {
            zustandHand.innerText = randomCard;
            deck.style.width = "130px";
        }
        if (spielkarten.length === 0) {
            deck.style.display = "none";
        }
    }
    //Teil2: random-Karte wird hinzugefügt, wenn Platz im Arry ist -> Arry ist gleich null
    function addToLeereHand() {
        for (let i = 0; i < hand.length; i++) {
            if (hand[i].textContent === "") {
                return hand[i];
            }
        }
        return null;
    }
    //Teil3: Angeklickte Karte in der Hand wandert in den Ablagestapel.
    function addToAblagestapel(_event) {
        let element = _event.target;
        ablage.textContent = element.textContent;
        element.textContent = "";
    }
})(MauMau || (MauMau = {}));
//# sourceMappingURL=aufg3b.js.map