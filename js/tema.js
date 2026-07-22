function aplicarTema(tema) {
  document.documentElement.setAttribute("data-tema", tema);
  var boton = document.getElementById("botonTema");
  if (tema === "oscuro") {
    boton.textContent = "☀️";
  } else {
    boton.textContent = "🌙";
  }
}

function alternarTema() {
  var temaActual = document.documentElement.getAttribute("data-tema");
  var temaNuevo = temaActual === "oscuro" ? "claro" : "oscuro";
  aplicarTema(temaNuevo);
  localStorage.setItem("memotestTema", temaNuevo);
}

function cargarTemaGuardado() {
  var temaGuardado = localStorage.getItem("memotestTema");
  if (temaGuardado) {
    aplicarTema(temaGuardado);
  }
}

function inicializarTema() {
  cargarTemaGuardado();
  document.getElementById("botonTema").addEventListener("click", alternarTema);
}

document.addEventListener("DOMContentLoaded", inicializarTema);
