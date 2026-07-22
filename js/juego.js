var primeraCarta = null;
var segundaCarta = null;
var bloqueoTablero = false;

function seleccionarCarta(evento) {
  var carta = evento.currentTarget;
  if (bloqueoTablero) {
    return;
  }
  if (carta === primeraCarta) {
    return;
  }
  if (carta.classList.contains("carta-encontrada")) {
    return;
  }
  if (!temporizadorIniciado) {
    iniciarTemporizador();
  }
  carta.classList.add("carta-volteada");
  if (!primeraCarta) {
    primeraCarta = carta;
    return;
  }
  segundaCarta = carta;
  bloqueoTablero = true;
  incrementarIntentos();
  compararCartas();
}

function compararCartas() {
  var coinciden = primeraCarta.dataset.codigo === segundaCarta.dataset.codigo;
  if (coinciden) {
    marcarParEncontrado();
  } else {
    sumarError();
    setTimeout(ocultarCartasNoCoincidentes, 800);
  }
}

function marcarParEncontrado() {
  primeraCarta.classList.add("carta-encontrada");
  segundaCarta.classList.add("carta-encontrada");
  sumarPar();
  primeraCarta = null;
  segundaCarta = null;
  bloqueoTablero = false;
}

function ocultarCartasNoCoincidentes() {
  primeraCarta.classList.remove("carta-volteada");
  segundaCarta.classList.remove("carta-volteada");
  primeraCarta = null;
  segundaCarta = null;
  bloqueoTablero = false;
}
