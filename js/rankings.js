function guardarResultadoEnRanking(puntajeFinal, tiempoFormateado) {
  var resultados = obtenerResultadosGuardados();
  var nuevoResultado = {
    nombre: nombreJugador,
    nivel: nivelSeleccionado,
    puntaje: puntajeFinal,
    intentos: intentos,
    errores: errores,
    tiempo: tiempoFormateado,
    segundos: segundosTranscurridos,
    fecha: new Date().toLocaleString(),
    marcaTiempo: new Date().getTime()
  };
  resultados.push(nuevoResultado);
  localStorage.setItem("memotestRanking", JSON.stringify(resultados));
}

function obtenerResultadosGuardados() {
  var datosGuardados = localStorage.getItem("memotestRanking");
  if (!datosGuardados) {
    return [];
  }
  return JSON.parse(datosGuardados);
}

function mostrarRanking() {
  var resultados = obtenerResultadosGuardados();
  var orden = document.getElementById("selectorOrden").value;
  resultados = ordenarResultados(resultados, orden);
  pintarTablaRanking(resultados);
  document.getElementById("modalRanking").classList.remove("oculto");
}

function ordenarResultados(resultados, criterio) {
  var copia = resultados.slice();
  if (criterio === "fecha") {
    copia.sort(compararPorFecha);
  } else if (criterio === "duracion") {
    copia.sort(compararPorDuracion);
  } else if (criterio === "nivel") {
    copia.sort(compararPorNivel);
  } else {
    copia.sort(compararPorPuntaje);
  }
  return copia;
}

function compararPorPuntaje(a, b) {
  return b.puntaje - a.puntaje;
}

function compararPorFecha(a, b) {
  return b.marcaTiempo - a.marcaTiempo;
}

function compararPorDuracion(a, b) {
  return a.segundos - b.segundos;
}

function compararPorNivel(a, b) {
  return a.nivel.localeCompare(b.nivel);
}

function pintarTablaRanking(resultados) {
  var cuerpoTabla = document.getElementById("cuerpoTablaRanking");
  cuerpoTabla.textContent = "";
  if (resultados.length === 0) {
    cuerpoTabla.appendChild(crearFilaVacia());
    return;
  }
  var i;
  for (i = 0; i < resultados.length; i = i + 1) {
    cuerpoTabla.appendChild(crearFilaRanking(resultados[i]));
  }
}

function crearFilaVacia() {
  var fila = document.createElement("tr");
  var celda = document.createElement("td");
  celda.setAttribute("colspan", "7");
  celda.textContent = "Todavía no hay partidas guardadas.";
  fila.appendChild(celda);
  return fila;
}

function crearFilaRanking(resultado) {
  var fila = document.createElement("tr");
  fila.appendChild(crearCeldaTexto(resultado.nombre));
  fila.appendChild(crearCeldaTexto(traducirNivel(resultado.nivel)));
  fila.appendChild(crearCeldaTexto(String(resultado.puntaje)));
  fila.appendChild(crearCeldaTexto(String(resultado.intentos)));
  fila.appendChild(crearCeldaTexto(String(resultado.errores)));
  fila.appendChild(crearCeldaTexto(resultado.tiempo));
  fila.appendChild(crearCeldaTexto(resultado.fecha));
  return fila;
}

function crearCeldaTexto(texto) {
  var celda = document.createElement("td");
  celda.textContent = texto;
  return celda;
}

function ocultarModalRanking() {
  document.getElementById("modalRanking").classList.add("oculto");
}

function mostrarConfirmacionBorrado() {
  document.getElementById("modalConfirmarBorrado").classList.remove("oculto");
}

function ocultarConfirmacionBorrado() {
  document.getElementById("modalConfirmarBorrado").classList.add("oculto");
}

function confirmarBorradoRanking() {
  localStorage.removeItem("memotestRanking");
  ocultarConfirmacionBorrado();
  mostrarRanking();
}

function manejarCambioOrden() {
  mostrarRanking();
}

function inicializarRanking() {
  document.getElementById("botonRanking").addEventListener("click", mostrarRanking);
  document.getElementById("botonCerrarRanking").addEventListener("click", ocultarModalRanking);
  document.getElementById("botonBorrarRanking").addEventListener("click", mostrarConfirmacionBorrado);
  document.getElementById("botonConfirmarBorrado").addEventListener("click", confirmarBorradoRanking);
  document.getElementById("botonCancelarBorrado").addEventListener("click", ocultarConfirmacionBorrado);
  document.getElementById("selectorOrden").addEventListener("change", manejarCambioOrden);
}

document.addEventListener("DOMContentLoaded", inicializarRanking);
