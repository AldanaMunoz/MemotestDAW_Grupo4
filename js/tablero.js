var NIVELES = {
  facil: { pares: 8, clase: "tablero--facil" },
  medio: { pares: 10, clase: "tablero--medio" },
  dificil: { pares: 18, clase: "tablero--dificil" }
};

function generarTablero(nivel) {
  var configuracion = NIVELES[nivel];
  var seleccionesElegidas = elegirSelecciones(configuracion.pares);
  var mazo = crearMazo(seleccionesElegidas);
  pintarTablero(mazo, configuracion.clase);
}

function elegirSelecciones(cantidadPares) {
  var copiaSelecciones = mezclarArray(selecciones.slice());
  return copiaSelecciones.slice(0, cantidadPares);
}

function crearMazo(seleccionesElegidas) {
  var mazo = [];
  var i;
  for (i = 0; i < seleccionesElegidas.length; i = i + 1) {
    mazo.push(seleccionesElegidas[i]);
    mazo.push(seleccionesElegidas[i]);
  }
  return mezclarArray(mazo);
}

function pintarTablero(mazo, claseNivel) {
  var contenedorTablero = document.getElementById("tablero");
  contenedorTablero.textContent = "";
  contenedorTablero.className = "tablero " + claseNivel;
  var i;
  for (i = 0; i < mazo.length; i = i + 1) {
    contenedorTablero.appendChild(crearCarta(mazo[i]));
  }
}

function crearCarta(seleccion) {
  var carta = document.createElement("button");
  carta.type = "button";
  carta.className = "carta";
  carta.setAttribute("data-codigo", seleccion.codigo);

  var interior = document.createElement("span");
  interior.className = "carta-interior";

  var dorso = document.createElement("span");
  dorso.className = "carta-cara carta-dorso";
  dorso.textContent = "⚽";

  var frente = document.createElement("span");
  frente.className = "carta-cara carta-frente";

  var bandera = document.createElement("span");
  bandera.className = "carta-bandera";
  bandera.textContent = seleccion.bandera;

  var nombre = document.createElement("span");
  nombre.className = "carta-nombre";
  nombre.textContent = seleccion.nombre;

  frente.appendChild(bandera);
  frente.appendChild(nombre);
  interior.appendChild(dorso);
  interior.appendChild(frente);
  carta.appendChild(interior);

  carta.addEventListener("click", seleccionarCarta);

  return carta;
}