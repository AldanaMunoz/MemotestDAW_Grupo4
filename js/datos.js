var selecciones = [
  { codigo: "ar", nombre: "Argentina", bandera: "🇦🇷" },
  { codigo: "br", nombre: "Brasil", bandera: "🇧🇷" },
  { codigo: "fr", nombre: "Francia", bandera: "🇫🇷" },
  { codigo: "es", nombre: "España", bandera: "🇪🇸" },
  { codigo: "de", nombre: "Alemania", bandera: "🇩🇪" },
  { codigo: "it", nombre: "Italia", bandera: "🇮🇹" },
  { codigo: "pt", nombre: "Portugal", bandera: "🇵🇹" },
  { codigo: "uy", nombre: "Uruguay", bandera: "🇺🇾" },
  { codigo: "mx", nombre: "México", bandera: "🇲🇽" },
  { codigo: "us", nombre: "Estados Unidos", bandera: "🇺🇸" },
  { codigo: "ca", nombre: "Canadá", bandera: "🇨🇦" },
  { codigo: "jp", nombre: "Japón", bandera: "🇯🇵" },
  { codigo: "kr", nombre: "Corea del Sur", bandera: "🇰🇷" },
  { codigo: "ma", nombre: "Marruecos", bandera: "🇲🇦" },
  { codigo: "nl", nombre: "Países Bajos", bandera: "🇳🇱" },
  { codigo: "be", nombre: "Bélgica", bandera: "🇧🇪" },
  { codigo: "hr", nombre: "Croacia", bandera: "🇭🇷" },
  { codigo: "sn", nombre: "Senegal", bandera: "🇸🇳" },
  { codigo: "co", nombre: "Colombia", bandera: "🇨🇴" },
  { codigo: "cl", nombre: "Chile", bandera: "🇨🇱" }
];

function mezclarArray(arreglo) {
  var i, j, temporal;
  for (i = arreglo.length - 1; i > 0; i = i - 1) {
    j = Math.floor(Math.random() * (i + 1));
    temporal = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = temporal;
  }
  return arreglo;
}

function traducirNivel(nivel) {
  if (nivel === "facil") {
    return "Fácil";
  }
  if (nivel === "medio") {
    return "Medio";
  }
  return "Difícil";
}