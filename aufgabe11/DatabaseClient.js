var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("searchbutton"); //Search-Button
        insertButton.addEventListener("click", insert); //Funktionalität des Buttons
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    function search(_event) {
        let inputName = document.getElementById("searchname");
        let inputMatrikel = document.getElementById("searchmatrikel");
        let query = "command=search";
        query += "&nameSearch=" + inputName.value;
        query += "&matrikelSearch=" + inputMatrikel.value;
        console.log(query);
        sendRequest(query, handleSearchResponse);
    }
    function handleSearchResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert"; //Fügt ein neues Dokument query vom Typ string in die Kollektion ein
        query += "&name=" + inputs[0].value; //nimmt den Inhalt aus der form mit Namen name und schiebt ihn in den Array inputs an Stelle 0
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse); //inhalt aus query wird als request gesendet und die Funktion handleInsertPesponse wird ausgeführt
    }
    function refresh(_event) {
        let query = "command=find"; //findet alle Daten, die zu dem query Objekt passen
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest(); //neue XMLHttpRequest()
        //xhr.open("GET", "http://localhost:8100?" + _query, true);       //Get-Methode. Request wird an Server geschickt, True = asynchron
        xhr.open("GET", "https://eia2nodecode.herokuapp.com/" + _query, true);
        xhr.addEventListener("readystatechange", _callback); //readystatechange: Anonyme Funktion _callback wird ausgeführt wenn sich was verändert
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            //         let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(xhr.response);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map