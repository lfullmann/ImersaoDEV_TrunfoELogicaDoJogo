var jogador1 = {
  nome: "Personagem1",
  ataque: 80,
  defesa: 60,
  magia: 90,
};

var jogador2 = {
  nome: "Personagem2",
  ataque: 70,
  defesa: 65,
  magia: 85,
};

var jogador3 = {
  nome: "Personagem3",
  ataque: 88,
  defesa: 62,
  magia: 90,
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
