//Aufgabe: Aufgabe 3a
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 09.04.2017
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er jedoch unteranderem in Zusammenarbeit mit Salome Wei�er, Janett und Nadine entstanden ist.
//Er wurde nicht kopiert und auch nicht diktiert.


document.addEventListener("DOMContentLoaded", function(): void {

    let rice: number = 1;
    let line: number = 0;

    for (let n: number = 0; n < 64; n++) {

        let element: HTMLElement = document.createElement("div");
        element.textContent = rice.toString();
        
                
//        Umbruch nach jedem 8. Schachfeld

        if (n % 8 == 0) {
            line = line + 1;
            
        }
        
//          Farbwechsel gerade und ungerade Linie

        if (line % 2 == 0) {
            if (n % 2 != 0) { 
                element.className = "board black"; }
           
            else {
                element.className = "board white"; }
        }
        
        else {
            if (n % 2 != 0) {
                element.className = "board white";
            }
            else {
                element.className = "board black"; } 
        }
        
        
//            Reis wird hinzugef�gt
        rice = rice * 2;
        document.body.appendChild(element);


    }

let divList: NodeListOf<HTMLDivElement> = document.getElementsByTagName ("div");
    let status: boolean = false;

    for (let a: number = 0; a < 8; a++) {
        divList[a].addEventListener("click", newColor);

        function newColor(): void {
            if (status == false) {
                divList[a].style.backgroundColor = "red";
                status = true;
            }
           else {
           divList[a].style.backgroundColor = "grey";
           status = true;  }
      
      }   
    }
       
});    
    
    

    