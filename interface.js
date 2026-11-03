function criarLado(numero, letra) {
    // Se o número for 1 ele usa "Bluefill", se for qualquer outra coisa (2) usa "Redfill"
    const idDoPreenchimento = numero === 1 ? "Bluefill" : "Redfill";

    document.getElementById(`Player${numero}Side`).innerHTML = `
        <div id="Player${numero}Bar">
            <div id="${idDoPreenchimento}" class="fill"></div>
        </div>
        <div id="Player${numero}Word" class="word-display">_ _ _ _ _</div>
        <input type="text" id="Player${numero}TyBar" maxlength="1" placeholder="${letra}" autocomplete="off">
    `;
}

criarLado(1, "A"); // Vai criar com id="Bluefill"
criarLado(2, "B"); // Vai criar com id="Redfill"
