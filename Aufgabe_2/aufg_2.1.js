document.addEventListener("DOMContentLoaded", function () {
    let rice = 1;
    for (let n = 0; n < 64; n++) {
        let element = document.createElement("div");
        element.textContent = rice.toString();
        if (n % 2 == 0) {
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
        if (n % 8 == 0) {
            element.className += " umbruch";
            console.log(n);
        }
        rice = rice * 2;
        document.body.appendChild(element);
    }
});
//# sourceMappingURL=aufg_2.1.js.map