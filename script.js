///Barra de tipagem e rounds ------///------
let Player1TypeBar = document.getElementById(typ)







/// COMANDO CAIXA DE PALAVRAS ()
const palavra = "COMPUTADORES";
let letras = [];

function mostrarPalavra() {
    const tela = document.getElementById("palavra");

    tela.innerHTML = "";

    for (let letra of palavra) {
        const espaco = document.createElement("span");

        espaco.className = "letra";

        espaco.textContent = letras.includes(letra)
            ? letra
            : "_";

        tela.appendChild(espaco);
    }
}

function verificarLetra() {
    const campo = document.getElementById("letra");
    const tentativa = campo.value.toUpperCase();

    if (palavra.includes(tentativa) && !letras.includes(tentativa)) {
        letras.push(tentativa);
    }

    mostrarPalavra();

    campo.value = "";
}

mostrarPalavra();