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
  numeroCartaJogador = cartas[numeroCartaJogador];
  console.log(numeroCartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type = 'radio' name='atributo' value'" +
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
