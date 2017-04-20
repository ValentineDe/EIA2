//Aufgabe: Aufgabe 3a
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 09.04.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er jedoch unteranderem in Zusammenarbeit mit Salome Wei�er, Janett Stüwe und Nadine Malinowski entstanden ist.
//Er wurde nicht kopiert und auch nicht diktiert.

document.addEventListener("DOMContentLoaded", function () {
    let rice = 1;
    let line = 0;
    let boxResult = 0;
    for (let n = 0; n < 64; n++) {
        let element = document.createElement("div");
        element.textContent = rice.toString();
        //        Umbruch nach jedem 8. Schachfeld
        if (n % 8 == 0) {
            line = line + 1;
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
    // Farbwechsel bei "Klick"
    document.getElementsByTagName("div")[0];
    let divList = document.getElementsByTagName("div");
    for (let i = 0; i < 8; i++) {
        divList[i].addEventListener("click", colorChange);
        function colorChange() {
            if (divList[i].style.backgroundColor != "red") {
                divList[i].style.backgroundColor = "red";
                boxResult = boxResult + Number(divList[i].textContent);
            }
            else {
                if (i % 2 == 0) {
                    divList[i].style.backgroundColor = "black";
                }
                else {
                    divList[i].style.backgroundColor = "white";
                }
                boxResult = boxResult - Number(divList[i].textContent);
            }
            document.getElementById("box").textContent = "Dezimalzahl: " + boxResult.toString() + " Hexadezimal: " + boxResult.toString(16);
            ;
        }
    }
});
document.addEventListener("mousemove", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("box").style.position = "relative";
    document.getElementById("box").style.zIndex = "10000";
    //Koordinaten der Box
    document.getElementById("box").style.top = y + 15 + "px";
    document.getElementById("box").style.left = x + 15 + "px";
    document.getElementById("box").style.width = "120px";
    document.getElementById("box").style.border = "3px solid darkred";
    document.getElementById("box").style.backgroundColor = "white";
    document.getElementById("box").style.padding = "10px";
});
//# sourceMappingURL=aufg_2.1.js.map