var intentos = 0;
var errores = 0;
var paresEncontrados = 0;
var puntaje = 0;

var PUNTOS_POR_PAR = 100;
var BONUS_FINALIZAR = 300;
var PENALIZACION_ERROR = { facil: 10, medio: 20, dificil: 30 };

function incrementarIntentos() {
  intentos = intentos + 1;
  actualizarPanelEstado();
}

function sumarError() {
  errores = errores + 1;
  puntaje = puntaje - PENALIZACION_ERROR[nivelSeleccionado];
  if (puntaje < 0) {
    puntaje = 0;
  }
  actualizarPanelEstado();
}

function sumarPar() {
  paresEncontrados = paresEncontrados + 1;
  puntaje = puntaje + PUNTOS_POR_PAR;
  actualizarPanelEstado();
  verificarFinDePartida();
}

function calcularPuntajeFinal() {
  var puntajeFinal = puntaje + BONUS_FINALIZAR - segundosTranscurridos;
  if (puntajeFinal < 0) {
    puntajeFinal = 0;
  }
  return puntajeFinal;
}

function actualizarPanelEstado() {
  document.getElementById("valorIntentos").textContent = intentos;
  document.getElementById("valorErrores").textContent = errores;
  document.getElementById("valorPuntaje").textContent = puntaje;
}

function reiniciarContadores() {
  intentos = 0;
  errores = 0;
  paresEncontrados = 0;
  puntaje = 0;
  actualizarPanelEstado();
}