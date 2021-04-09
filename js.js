var jogador1 = {
  nome: "Personagem1",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90,
  },
};

var jogador2 = {
  nome: "Personagem2",
  atributos: {
    ataque: 70,
    defesa: 65,
    magia: 85,
  },
};

var jogador3 = {
  nome: "Personagem3",
  atributos: {
    ataque: 88,
    defesa: 62,
    magia: 90,
  },
};

var cartaMaquina;
var cartaJogador;
var cartas = [jogador1, jogador2, jogador3];
function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  radiosAtributo = document.getElementsByTagName("atributo");
  for (var i = 0; i < radiosAtributo; i++) {
    if (radioAtributo[i].checked) {
      return radiosAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributoSelecionado[atributoSelecionado]
  ) {
    alert("A máquina venceu!");
  } else if (
    cartaJogador.atributo[atributoSelecionado] <
    cartaMaquina.atributo[atributoSelecionado]
  ) {
    alert("A carta da máquina venceu");
  } else {
    alert("Empate");
  }
}
