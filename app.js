let listaDeNumerosSorteados = [];
let numeroMax = 30;
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    mensagemInicial();
    console.log(listaDeNumerosSorteados);
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

reiniciarJogo();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 a ${numeroMax}`);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = numeroTentativas > 1 ? `tentativas!!` : ` tentativa, que sortudo!!`
    let mensagemTentativas = `Você descobriu o número secreto com ${numeroTentativas} ${palavraTentativa}`

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        numeroSecreto > chute ? exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`) : exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`);
        numeroTentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosLista == numeroMax) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}