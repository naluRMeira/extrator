const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
const texto = document.querySelector("#entrada-de-texto");

const campoResultado = document.querySelector('#resultado-palavrahave');

campoResultado.textContent = texto;

const palavras = procesaTexto (texto);

campoResultado.textContent = palavras.join("- ");
}