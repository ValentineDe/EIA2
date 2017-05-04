var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 für weiblich oder 1 für männlich) und Kommentar");
                alert(saveData(input)); //klammern zuerst ausgeführt, Input an savedata übergeben
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer")); //problem: abfrage
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let dataArr = _input.split(","); //Erstelle einen Array vom Typ string mit allen eingegebenen Daten. Splitte den Input auf. Einen Split nach jedem Komma (age, name, firstname,...)
        let s = {
            matrikel: parseInt(dataArr[0]),
            name: dataArr[1],
            firstname: dataArr[2],
            age: parseInt(dataArr[3]),
            sex: parseInt(dataArr[4]) == 1,
            comment: dataArr[5]
        };
        students.push(s); //pushe die Daten aus s in die students-kartei damit ein neuer "Student" entsteht
        let gender;
        if (parseInt(dataArr[4]) == 1) {
            gender = "männlich";
        }
        else {
            gender = "weiblich";
        }
        //Ausgabe
        return "Deine eingegebenen Daten:\n" + "\nMatrikelnr.: " + s.matrikel + "\nName: " + s.name + "," + s.firstname + "\nAlter: " + s.age + "\nGeschlecht: " + gender + "\nKommentar: " + s.comment;
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                let gender = students[i].sex ? "männlich" : "weiblich"; //Gender variable als string entspricht der kategorie sex des Studentens. If-Anweisung durch ? true=1 ->männlich, false=0 ->weiblich
                return "Gespeicherte Daten zu folgender Matrikelnr.: " + students[i].matrikel + "\n\nName: " + students[i].name + "," + students[i].firstname + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }
            else {
                return "Diese Matrikelnummer ist nicht vorhanden.";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=studivz.js.map