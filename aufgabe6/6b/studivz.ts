namespace StudiVZ {
    interface StudentData {
        matrikel: number;
        name: string;
        firstname: string;
        age: number;
        sex: boolean;
        comment: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 für weiblich oder 1 für männlich) und Kommentar");
                alert(saveData(input)); //klammern zuerst ausgeführt, Input an savedata übergeben
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer")); //problem: abfrage
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let dataArr: string[] = _input.split(","); //Erstelle einen Array vom Typ string mit allen eingegebenen Daten. Splitte den Input auf. Einen Split nach jedem Komma (age, name, firstname,...)
        let s: StudentData = {                      //StudentData-Inhalte werden angepasst und dem Typ dataArr als string angepasst.
            matrikel: parseInt(dataArr[0]),         //matrikel ist in Schublade 0 im dataArr und wird in string umgewandelt.
            name: dataArr[1],
            firstname: dataArr[2],
            age: parseInt(dataArr[3]),
            sex: parseInt(dataArr[4]) == 1,
            comment: dataArr[5]
        };

        students.push(s);  //pushe die Daten aus s in die students-kartei damit ein neuer "Student" entsteht

        let gender: string;
        if (parseInt(dataArr[4]) == 1) {   //Wenn die sex-info in der 4. Schublade == 1 eingetippt wurde, dann ist er männlich
            gender = "männlich";
        }
        else {                      //Wurde 0 eingegeben ist er weiblich
            gender = "weiblich";
        }

        //Ausgabe
        return "Deine eingegebenen Daten:\n" + "\nMatrikelnr.: " + s.matrikel + "\nName: " + s.name + "," + s.firstname + "\nAlter: " + s.age + "\nGeschlecht: " + gender + "\nKommentar: " + s.comment;
    }

    function queryData(_matrikel: number): string {

        for (let i: number = 0; i < students.length; i++) {  //Schleife geht durch students durch und arbeitet alle vorhandenen Studenten einzelnd durch. Counter i++

            if (students[i].matrikel == _matrikel) {          //Student Nr.i wird auf seine gespeicherte matrikelnr. überprüft. Entspricht sie der eingegebenen matrikelnr., dann return weitere Infos
                let gender: string = students[i].sex ? "männlich" : "weiblich"; //Gender variable als string entspricht der kategorie sex des Studentens. If-Anweisung durch ? true=1 ->männlich, false=0 ->weiblich
                return "Gespeicherte Daten zu folgender Matrikelnr.: " + students[i].matrikel + "\n\nName: " + students[i].name + "," + students[i].firstname + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }

            else {                //matrikelnr. stimmt nicht überein
                return "Diese Matrikelnummer ist nicht vorhanden.";
            }
        }
    }
}