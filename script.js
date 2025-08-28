const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
const texto = document.querySelector("#entrada-de-texto");
const campoResultado = document.querySelector('#resultado-palavrahave');
const palavraschave = procesaTexto (texto);
campoResultado.textContent = palavraschave.join("- ");
}

function procesaTexto(texto){
    let palavras = texto.split(/[^a-Za-Z]+/);
    return palavras;
}