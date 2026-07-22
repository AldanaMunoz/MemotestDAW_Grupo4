var segundosTranscurridos = 0;
var intervaloTemporizador = null;
var temporizadorIniciado = false;

function iniciarTemporizador() {
  if (temporizadorIniciado) {
    return;
  }
  temporizadorIniciado = true;
  intervaloTemporizador = setInterval(actualizarTemporizador, 1000);
}

function actualizarTemporizador() {
  segundosTranscurridos = segundosTranscurridos + 1;
  mostrarTiempo();
}

function detenerTemporizador() {
  clearInterval(intervaloTemporizador);
  temporizadorIniciado = false;
}

function reiniciarTemporizador() {
  detenerTemporizador();
  segundosTranscurridos = 0;
  mostrarTiempo();
}

function mostrarTiempo() {
  document.getElementById("valorTiempo").textContent = formatearTiempo(
    segundosTranscurridos,
  );
}

function formatearTiempo(segundos) {
  var minutos = Math.floor(segundos / 60);
  var segundosRestantes = segundos % 60;
  var minutosTexto = minutos < 10 ? "0" + minutos : String(minutos);
  var segundosTexto =
    segundosRestantes < 10
      ? "0" + segundosRestantes
      : String(segundosRestantes);
  return minutosTexto + ":" + segundosTexto;
}
