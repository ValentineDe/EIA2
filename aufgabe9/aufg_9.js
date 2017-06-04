//Aufgabe: Aufgabe 9
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var Form;
(function (Form) {
    window.addEventListener("load", init);
    let scoopPrice = 1;
    let toppingsPrice = 0.5;
    let flavorPrice = 2;
    let wafflePrice = 1;
    let flavors = ["Schokolade-Chilli", "Avocado", "Lavendel", "Basilikum", "Macha", "Schwarztee-Zitrone", "Drachenfrucht", "Rosmarin", "Pecannuss-Banane", "Sesam", "Cola-Weizen"];
    let toppings = ["Kaffeebohnen", "Blüten", "Amaranth", "Erdnussbutter", "Kakaonibs", "Kiwi-Erdbeer Sauce", "Ahoi-Brause", "Chilliflocken", "Salted Caramel", "Kürbiskerne", "Schokosirup", "Ahornsirup"];
    let container = ["Waffel", "Becher", "Am Stiel"];
    let inputsFlavor = [];
    let inputsTopping = [];
    let inputsContainer = [];
    let fieldset;
    function init() {
        fieldset = document.getElementsByTagName("fieldset")[0];
        createFlavor();
        fieldset = document.getElementsByTagName("fieldset")[1];
        createTopping();
        fieldset = document.getElementsByTagName("fieldset")[2];
        createContainer();
        fieldset.addEventListener("change", handleOrder);
        fieldset.addEventListener("change", showSum);
    }
    ///////////Eissorte////////////////////////////////////////////////      
    function createFlavor() {
        for (let i = 0; i < flavors.length; i++) {
            console.log(flavors[i]);
            let label = document.createElement("label");
            let input = document.createElement("input");
            label.innerText = flavors[i];
            label.appendChild(input);
            input.setAttribute("type", "number");
            input.setAttribute("value", "0");
            input.min = "0";
            input.name = "flavorChoice";
            inputsFlavor.push(input);
            fieldset.appendChild(label);
        }
    }
    ///////////Topping////////////////////////////////////////////////     
    function createTopping() {
        for (let i = 0; i < toppings.length; i++) {
            console.log(toppings[i]);
            createInputTopping(toppings[i]);
        }
    }
    function createInputTopping(_toppings) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.value = "";
        input.name = "lala";
        label.innerText = _toppings;
        label.appendChild(input);
        inputsTopping.push(input);
        fieldset.appendChild(label);
    }
    ///////////Darreichungsform////////////////////////////////////////////////     
    function createContainer() {
        for (let i = 0; i < container.length; i++) {
            console.log(container[i]);
            createInputContainer(container[i]);
        }
    }
    function createInputContainer(_container) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _container;
        label.appendChild(input);
        input.type = "radio";
        input.name = "lala";
        inputsContainer.push(input);
        fieldset.appendChild(label);
    }
    ///////////Preissumme////////////////////////////////////////////////  
    function handleOrder(_event) {
        console.log(_event);
        let order = document.getElementById("gesamtsumme");
        order.innerText = "";
        for (let i = 0; i < inputsFlavor.length; i++) {
            if (parseInt(inputsFlavor[i].value) > 0) {
                order.innerText += flavors[i] + " " + ": " + (parseInt(inputsFlavor[i].value) * 1) + "\n";
            }
        }
        for (let i = 0; i < inputsTopping.length; i++) {
            if (inputsTopping[i].checked) {
                order.innerText += toppings[i] + " " + "\n";
            }
        }
    }
    function showSum(_event) {
        let sum = 0;
        for (let i = 0; i < inputsFlavor.length; i++) {
            sum += parseInt(inputsFlavor[i].value);
        }
        for (let i = 0; i < inputsTopping.length; i++) {
            if (inputsTopping[i].checked)
                sum += 0.5;
        }
        console.log(sum);
        document.getElementById("gesamtsumme").innerText = sum.toString() + " €";
    }
})(Form || (Form = {}));
//# sourceMappingURL=aufg_9.js.map