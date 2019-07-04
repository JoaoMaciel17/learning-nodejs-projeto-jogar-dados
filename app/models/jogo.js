function Jogo(dados = 5, lados = 6) {

	console.log('model: executar constructor de jogo');
	this.dados = dados;
	this.lados = lados;
	this.pontos = 0;
	this.n = 0;
	this.skin = 'skin3';
}

Jogo.prototype.novoJogo = function(){
	console.log('model: novoJogo');
	this.pontos = 0; //Pontos acumulados
	this.n = 0; //Numero de jogadas

}

Jogo.prototype.lancarUmDado = function(){
	var valorAleatorio = Math.random(); //No intervalo [0,1]
	//De (0,1) * 5 => [0,5]
	//Usando math.floor temos (0,1,2,3,4,5)
	//Somando uma unidade temos (1,2,3,4,5,6)
	var lado = 1 + Math.floor(valorAleatorio * this.lados);
	
	return lado;
}

Jogo.prototype.lancarDados = function(){
	console.log('model: lancarDados');
	var lancamento = [];
	for (var i = 0; i < this.dados; i++) {
		lancamento[i] = this.lancarUmDado();
	}

	return lancamento;
}

Jogo.prototype.contarDados = function(lancamento){
	var contagem = Array(this.lados).fill(0);
	for (var i = 0; i < lancamento.length; i++) {
		var numero = lancamento[i];
		contagem[numero-1] += 1;
	}

	return contagem;

}

const GENERALA = { jogo : 'Generala', pontos : 100 }
const POKER    = { jogo : 'Poker'   , pontos : 50  }
const FULL     = { jogo : 'Full'    , pontos : 30  }
const NADA     = { jogo : 'Nenhum'  , pontos : 0   }

Jogo.prototype.analisarLancamento = function(lancamento){

	var contagem = this.contarDados(lancamento);
	var resultado;
	if ( contagem.find(e => e === 5) )
		resultado = GENERALA;
	else if ( contagem.find(e => e === 4) )
		resultado = POKER;
	else if ( contagem.find(e => e === 3) )
		resultado = FULL;
	else
		resultado = NADA;

	return resultado;

}

Jogo.prototype.novoLancamento = function(){

	console.log('model: novolancamento');
	var lancamento = this.lancarDados();
	console.log('model: analisarLancamento', resultado);
	var analiseLancamento = this.analisarLancamento(lancamento);
	this.pontos += analiseLancamento.pontos;
	this.n += 1;
	console.log('model: prepara resultado');

	var resultado = {

		pontosAcumulados : this.pontos,
		nLancamento : this.n,
		lancamento : lancamento,
		jogoLancamento : analiseLancamento.jogo,
		pontosLancamento : analiseLancamento.pontos,
		skin : this.skin

	};

	return resultado;

}

jogo = new Jogo();

lancamento = jogo.lancarDados();
contagem = jogo.contarDados(lancamento);
resultado = jogo.analisarLancamento (lancamento);

console.log('Dados sorteado: ', lancamento);
console.log('contagem; ', contagem);
console.log('Analise do Lançamento: ', resultado);

module.exports.Jogo = Jogo;