//Aufgabe: Aufgabe 3b
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 09.04.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe unter Beihilfe eines Tutors.
//Er wurde nicht kopiert und auch nicht diktiert.
let spielkarten = [
    "Karo 7",
    "Karo 8",
    "Karo 9",
    "Karo 10",
    "Karo Bube",
    "Karo Königin",
    "Karo König",
    "Karo Ass",
    "Herz 7",
    "Herz 8",
    "Herz 9",
    "Herz 10",
    "Herz Bube",
    "Herz Königin",
    "Herz König",
    "Herz Ass",
    "Pik 7",
    "Pik 8",
    "Pik 9",
    "Pik 10",
    "Pik Bube",
    "Pik Königin",
    "Pik König",
    "Pik Ass",
    "Kreuz 7",
    "Kreuz 8",
    "Kreuz 9",
    "Kreuz 10",
    "Kreuz Bube",
    "Kreuz Königin",
    "Kreuz König",
    "Kreuz Ass"
];
let nachziehStapel;
let hand;
let ablage;
//Teil1: Erstelle ein div "nachziehStapel" für den Nachziehstapel und füge ihm ein click-Event "addToHand" hinzu.
window.onload = function () {
    hand = document.getElementById("hand");
    ablage = document.getElementById("ablage");
    nachziehStapel = document.createElement("div");
    document.body.appendChild(nachziehStapel);
    nachziehStapel.addEventListener("click", addToHand);
    nachziehStapel.style.marginTop = "-410px";
};
//Teil2: Erstelle einen weiteren div "handKarten" für die Hand und füge ihm eine random spielkarte bei click auf Deck hinzu. 
//Füge Hand ein click-Event "addToAblage" hinzu.
function addToHand() {
    for (let i = 0; i < 5; i++) {
        let deck = spielkarten[Math.floor(Math.random() * (spielkarten.length - 1))];
        let handKarten = document.createElement("div");
        handKarten.textContent = deck;
        hand.appendChild(handKarten);
        console.log(deck);
        handKarten.addEventListener("click", addToAblage);
        hand.style.fontSize = "1em";
        handKarten.style.marginLeft = "-41px";
        handKarten.style.backgroundColor = "lightgrey";
        handKarten.style.marginTop = "-30px";
    }
}
;
//Teil3: Erstelle einen weiteren div "ablageStapel" und verschiebe die Spielkarte auf der Hand bei click in die Ablage. 
function addToAblage() {
    let deck = spielkarten[Math.floor(Math.random() * (spielkarten.length - 1))];
    let ablageStapel = document.createElement("div");
    ablageStapel.textContent = deck;
    ablage.appendChild(ablageStapel);
    console.log(deck);
    ablage.style.fontSize = "1em";
    ablageStapel.style.position = "absolute";
    ablageStapel.style.backgroundColor = "white";
    ablageStapel.style.marginLeft = "-41px";
}
;
//        
//    if (spielkarten.length == 0){
//        div.style.display ;} 
//# sourceMappingURL=aufg_3b.js.map