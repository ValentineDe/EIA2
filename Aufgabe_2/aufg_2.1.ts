
document.addEventListener("DOMContentLoaded", function(): void {

    let rice: number = 1;
    let line: number = 0;

    for (let n: number = 0; n < 64; n++) {

        let element: HTMLElement = document.createElement("div");
        element.textContent = rice.toString();
        
                
//        Umbruch nach jedem 8. Schachfeld

        if (n % 8 == 0) {
            line = line + 1;
            console.log(n);
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
        
        
//            Reis wird hinzugefügt
        rice = rice * 2;
        document.body.appendChild(element);


    }

});