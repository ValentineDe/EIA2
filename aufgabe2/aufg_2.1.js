//Aufgabe: Aufgabe 2a
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 31.03.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er jedoch unteranderem in Zusammenarbeit mit Salome Wei�er entstanden ist.
//Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener("DOMContentLoaded", function () {
    let rice = 1;
    let line = 0;
    for (let n = 0; n < 64; n++) {
        let element = document.createElement("div");
        element.textContent = rice.toString();
        //        Umbruch nach jedem 8. Schachfeld
        if (n % 8 == 0) {
            line = line + 1;
            console.log(n);
        }
        //          Farbwechsel gerade und ungerade Linie
        if (line % 2 == 0) {
            if (n % 2 != 0) {
                element.className = "board black";
            }
            else {
                element.className = "board white";
            }
        }
        else {
            if (n % 2 != 0) {
                element.className = "board white";
            }
            else {
                element.className = "board black";
            }
        }
        //            Reis wird hinzugef�gt
        rice = rice * 2;
        document.body.appendChild(element);
    }
});
//# sourceMappingURL=aufg_2.1.js.map