//              Definindo a dimensão do palco do jogo
// Função para ajuste de tamanho da tela
// usado para quando o usuário quiser diminuir o tamanho da tela
// ***Aqui declaramos as variaveis fora da função para que possamos depois recuperar seu valor fora do escopo da função. Caso fosse declarado dentro do escopo, fora do escopo elas não mudariam seu valor.***

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 20
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	
	criaMosquitoTempo = 1000
} else if(nivel === 'ultra') {
	
	criaMosquitoTempo = 750
}

function ajustSize() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura);
}
ajustSize()

var cronometro = setInterval(()=>{
    document.getElementById('cronos').innerHTML = tempo
    tempo--;
    if(tempo < 0){
        window.location.href = 'Venceu.html'
    }
}, 1000)

function posicaoRandomica(){


    // Remover o mosquito anterior (caso exista)
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        if (vidas > 3){
            window.location.href = 'fim_de_jogo.html'
            mosquito.style.background = './imagens/game_over.png'
        } else{
            document.getElementById('v'+vidas).src="./imagens/coracao_vazio.png"
            vidas++
        }
    }
    // Criando posições randômicas  
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    
    // Verificando se as posicoes são 0, para a imagem não desaparecer
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    // Criando um elemento HTML e depois alterando o seus atributos
    // criar o elemento HTML
    var mosquito = document.createElement('img')
    // altera os atributos do meu elemento img
    // Tudo isso é alterando os atributos de cada parte do elemento, usando DOM. 
    mosquito.src = "./imagens/mosca.png"
    mosquito.className = alturaAle() + ' ' + ladosAle()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosca'
    mosquito.onclick = function(){
        document.getElementById('mosca').remove()
    }
    
    // adcionando o elemento criado acima (um filho) no body da pagina - DOM
    document.body.appendChild(mosquito)
}

    // Criando tamanhos aleatórios
function alturaAle(){
    var alturaAleatoria = Math.ceil(Math.random() * 3)
    return 'mosquito'+alturaAleatoria
}
    
    // Lado A e lado B da imagem
function ladosAle(){
    var ladosAleatorio = Math.floor(Math.random() * 2)
    return 'inverter'+ladosAleatorio
}

setInterval(function() {posicaoRandomica()}, criaMosquitoTempo)