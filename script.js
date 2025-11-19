(function() {
    if (window.location.pathname === "/checkout/cart") {

        let chApp = document.getElementById("ch-app");

        if (!chApp) {
            chApp = document.createElement("div");
            chApp.id = "ch-app";
            document.body.appendChild(chApp);
        }

        chApp.style.backgroundColor = "blueviolet";
        chApp.style.width = "100%";
        chApp.style.height = "100px";
        chApp.style.display = "block";

        console.log("Elemento #ch-app criado/estilizado com sucesso.");
    }
})();
