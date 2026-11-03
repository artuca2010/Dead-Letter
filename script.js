const palavras = [
    "COMPUTADORES", "TECLADO", "MONITOR", "INTERNET", "PROGRAMA", // Suas 5 originais
    "CANETA", "CADERNO", "MOCHILA", "CELULAR", "RELOGIO",
    "CADEIRA", "JANELA", "PLANETA", "GALAXIA", "FUTEBOL",
    "GUITARRA", "BATERIA", "TEATRO", "CINEMA", "CASTELO",
    "FLORESTA", "DESERTO", "OCEANO", "VIAGEM", "AVIAO",
    "CORRIDA", "DESTINO", "TESOURO", "PIRATA", "CORONA",
    "ESMERALDA", "DIAMANTE", "FANTASMA", "VAMPIRO", "DRAGOA",
    "MISTERIO", "SEGREDO", "UNIVERSO", "CORAGEM", "TALENTO",
    "FLAMINGO", "GIRAFA", "LEOPARDO", "TUBARAO", "PINGUIM",
    "PROJETO", "DESENHO", "PINTURA", "ESTATUA", "VIOLINO"
];

const MAX_ERROS = 5;
const rodada = document.getElementById("RoundInfo");
const GameMusic = new Audio("Assets/GameMusic.mp3");
const GameEnd = new Audio("Assets/GameEnd.mp3")
GameMusic.loop = true;
GameMusic.volume = 0.5;
GameEnd.volume = 1;

const jogadores = [
    {
        texto: document.getElementById("Player1Word"),
        campo: document.getElementById("Player1TyBar"),
        barra: document.getElementById("Player1Bar"),
        cadeira: document.getElementById("P1Chair"),
        tubo: document.getElementById("P1Tube"),
        letras: [],
        erros: 0
    },
    {
        texto: document.getElementById("Player2Word"),
        campo: document.getElementById("Player2TyBar"),
        barra: document.getElementById("Player2Bar"),
        cadeira: document.getElementById("P2Chair"),
        tubo: document.getElementById("P2Tube"),
        letras: [],
        erros: 0
    }
];

let vez = 0;
let fim = false;

function mostrarPalavra(j) {
    j.texto.textContent = [...j.palavra]
        .map(l => j.letras.includes(l) ? l : "_")
        .join(" ");
}

function atualizarVez() {
    jogadores.forEach((j, i) => {
        j.campo.disabled = fim || i !== vez;
    });
    jogadores[vez].campo.focus();
    rodada.textContent = fim ? "Fim de jogo" : "Round do Jogador " + (vez + 1);
}

function perder(j) {
    j.tubo.src = "Assets/OpendTube.png";
    j.cadeira.classList.add("cai");
    fim = true;
    GameMusic.pause()
    GameEnd.play()
}

function jogar(j) {
    const letra = j.campo.value.toUpperCase();
    j.campo.value = "";

    if (!/[A-Z]/.test(letra) || j.letras.includes(letra)) return;

    j.letras.push(letra);

    if (!j.palavra.includes(letra)) {
        j.erros++;
        j.barra.firstElementChild.style.height = (j.erros / MAX_ERROS * 100) + "%";
    }

    mostrarPalavra(j);

    if (j.erros >= MAX_ERROS) {
    perder(j);
} else if (!j.texto.textContent.includes("_")) {
    perder(jogadores[1 - vez]);
} else {
    vez = 1 - vez;
}

    atualizarVez();
}

const botao = document.getElementById("BtnComecar");

botao.addEventListener("click", () => {
    const sorteadas = [...palavras].sort(() => Math.random() - 0.5);

    jogadores.forEach((j, i) => {
        j.palavra = sorteadas[i];
        mostrarPalavra(j);
    });

    GameMusic.play();
    botao.style.display = "none";
    atualizarVez();
});

jogadores.forEach(j => {
    j.campo.disabled = true;
    j.campo.addEventListener("input", () => jogar(j));
});