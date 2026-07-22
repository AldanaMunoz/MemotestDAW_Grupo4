function esAlfanumerico(valor) {
  var patron = /^[A-Za-zÁÉÍÓÚÑáéíóúñ0-9 ]+$/;
  return patron.test(valor.trim());
}

function validarNombreJugador(valor) {
  return esAlfanumerico(valor) && valor.trim().length >= 3;
}

function validarNivelSeleccionado(valor) {
  return valor === "facil" || valor === "medio" || valor === "dificil";
}

function mostrarError(idError, mensaje) {
  var elementoError = document.getElementById(idError);
  elementoError.textContent = mensaje;
  elementoError.classList.remove("oculto");
}

function ocultarError(idError) {
  var elementoError = document.getElementById(idError);
  elementoError.textContent = "";
  elementoError.classList.add("oculto");
}