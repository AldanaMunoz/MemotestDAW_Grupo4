var nombreJugador = "";
var nivelSeleccionado = "";

function obtenerNivelSeleccionado() {
  var opciones = document.getElementsByName("nivel");
  var i;
  for (i = 0; i < opciones.length; i = i + 1) {
    if (opciones[i].checked) {
      return opciones[i].value;
    }
  }
  return "";
}

function iniciarPartida() {
  var nombre = document.getElementById("campoNombre").value;
  var nivel = obtenerNivelSeleccionado();
  var nombreValido = validarNombreJugador(nombre);
  var nivelValido = validarNivelSeleccionado(nivel);

  if (nombreValido) {
    ocultarError("errorNombre");
  } else {
    mostrarError("errorNombre", "El nombre debe tener al menos 3 letras.");
  }

  if (nivelValido) {
    ocultarError("errorNivel");
  } else {
    mostrarError("errorNivel", "Elegí un nivel de dificultad.");
  }

  if (nombreValido && nivelValido) {
    nombreJugador = nombre.trim();
    nivelSeleccionado = nivel;
    document.getElementById("pantallaInicio").classList.add("oculto");
    document.getElementById("pantallaJuego").classList.remove("oculto");
    document.getElementById("valorJugador").textContent = nombreJugador;
    document.getElementById("valorNivel").textContent = traducirNivel(nivelSeleccionado);
    generarTablero(nivelSeleccionado);
  }
}

function inicializarPantallaInicio() {
  document.getElementById("botonComenzar").addEventListener("click", iniciarPartida);
}

document.addEventListener("DOMContentLoaded", inicializarPantallaInicio);
