function criarLado(numero, letra) {
    document.getElementById(`Player${numero}Side`).innerHTML = `
        <div id="Player${numero}Bar"><div class="fill"></div></div>
        <div id="Player${numero}Word" class="word-display">_ _ _ _ _</div>
        <input type="text" id="Player${numero}TyBar" maxlength="1" placeholder="${letra}" autocomplete="off">
    `;
}

criarLado(1, "A");
criarLado(2, "B");