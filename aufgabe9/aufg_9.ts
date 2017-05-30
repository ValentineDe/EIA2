//Aufgabe: Aufgabe 9
//Name: Valentine Deinert
//Matrikel: 254015
//Datum: 20.05.2017  
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Form {
    window.addEventListener("load", init);

    let scoopPrice: number = 1;
    let toppingsPrice: number = 0.5;
    let flavorPrice: number = 2;
    let wafflePrice: number = 1;


    let flavors: string[] = ["Schokolade-Chilli", "Avocado", "Lavendel", "Basilikum", "Macha", "Schwarztee-Zitrone", "Drachenfrucht", "Rosmarin", "Pecannuss-Banane", "Sesam", "Cola-Weizen"];
    let toppings: string[] = ["Kaffeebohnen", "Blüten", "Amaranth", "Erdnussbutter", "Kakaonibs", "Kiwi-Erdbeer Sauce", "Ahoi-Brause", "Chilliflocken", "Salted Caramel", "Kürbiskerne", "Schokosirup", "Ahornsirup"];
    let container: string[] = ["Waffel", "Becher", "Am Stiel"];

    let inputs: HTMLInputElement[] = [];
    let fieldset: HTMLFieldSetElement;


    function init(): void {

        fieldset = document.getElementsByTagName("fieldset")[0];
        createFlavor();
        fieldset = document.getElementsByTagName("fieldset")[1];
        createTopping();
        fieldset = document.getElementsByTagName("fieldset")[2];
        createContainer();
        fieldset.addEventListener("change", handleChange);
    }


    ///////////Eissorte////////////////////////////////////////////////      
    function createFlavor(): void {


        for (let i: number = 0; i < flavors.length; i++) {
            console.log(flavors[i]);
            createInputFlavor(flavors[i]);
        }
    }

    function createInputFlavor(_flavors: string): void {

        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _flavors;
        label.appendChild(input);
        input.type = "radio";
        input.value = "fdsda";
        input.name = "flavorChoice";
        inputs.push(input);
        fieldset.appendChild(label);
    }

    ///////////Topping////////////////////////////////////////////////     
    function createTopping(): void {

        for (let i: number = 0; i < toppings.length; i++) {
            console.log(toppings[i]);
            createInputTopping(toppings[i]);
        }
    }

    function createInputTopping(_toppings: string): void {

        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");


        input.type = "checkbox";
        input.value = "";
        input.name = "lala";
        label.innerText = _toppings;
        label.appendChild(input);
        inputs.push(input);
        fieldset.appendChild(label);
    }

    ///////////Darreichungsform////////////////////////////////////////////////     
    function createContainer(): void {

        for (let i: number = 0; i < container.length; i++) {
            console.log(container[i]);
            createInputContainer(container[i]);
        }
    }

    function createInputContainer(_container: string): void {

        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _container;
        label.appendChild(input);
        input.type = "radio";
        input.name = "lala";
        inputs.push(input);
        fieldset.appendChild(label);
    }

    ///////////Preissumme////////////////////////////////////////////////  

    function handleChange(_event: Event): void {

        let sum: number = 0;
        for (let i: number = 0; i < inputs.length; i++) {
            console.log(inputs[i]);
            sum += parseInt(inputs[i].value);
        }
        console.log(sum);



        //        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //        console.log("Changed " + target.name + " to " + target.value);
        //
        //        if (this.type == "checkbox")
        //            console.log("Changed " + target.name + " to " + target.checked);
        //
        //
        //        if (target.name == "Slider") {
        //            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
        //            progress.value = parseFloat(target.value);
        //        }
    }
}       