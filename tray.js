(function () {

    const currentScript = document.currentScript;

    // Se o script ainda não for module, recria ele
    if (currentScript && currentScript.type !== "module") {

        const newScript = document.createElement("script");
        newScript.type = "module";
        newScript.src = currentScript.src;

        currentScript.parentNode.insertBefore(newScript, currentScript);
        currentScript.remove();

        console.log("Recarregando script como module...");
        return; // impede execução duplicada
    }

    // Seu código original
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
