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

function verificarFinDePartida() {
  var totalPares = NIVELES[nivelSeleccionado].pares;
  if (paresEncontrados === totalPares) {
    finalizarPartida();
  }
}

function finalizarPartida() {
  detenerTemporizador();
  var puntajeFinal = calcularPuntajeFinal();
  var tiempoFormateado = formatearTiempo(segundosTranscurridos);
  mostrarModalFinal(puntajeFinal, tiempoFormateado);
  guardarResultadoEnRanking(puntajeFinal, tiempoFormateado);
}

function mostrarModalFinal(puntajeFinal, tiempoFormateado) {
  document.getElementById("finalJugador").textContent = nombreJugador;
  document.getElementById("finalNivel").textContent = traducirNivel(nivelSeleccionado);
  document.getElementById("finalIntentos").textContent = intentos;
  document.getElementById("finalErrores").textContent = errores;
  document.getElementById("finalTiempo").textContent = tiempoFormateado;
  document.getElementById("finalPuntaje").textContent = puntajeFinal;
  document.getElementById("modalFinal").classList.remove("oculto");
}

function reiniciarPartida() {
  document.getElementById("modalFinal").classList.add("oculto");
  reiniciarContadores();
  reiniciarTemporizador();
  primeraCarta = null;
  segundaCarta = null;
  bloqueoTablero = false;
  generarTablero(nivelSeleccionado);
}

function volverAPantallaInicio() {
  document.getElementById("modalFinal").classList.add("oculto");
  reiniciarContadores();
  reiniciarTemporizador();
  document.getElementById("pantallaJuego").classList.add("oculto");
  document.getElementById("pantallaInicio").classList.remove("oculto");
}

function inicializarBotonesFinales() {
  document.getElementById("botonJugarDeNuevo").addEventListener("click", reiniciarPartida);
  document.getElementById("botonCambiarJugador").addEventListener("click", volverAPantallaInicio);
}

document.addEventListener("DOMContentLoaded", inicializarBotonesFinales);