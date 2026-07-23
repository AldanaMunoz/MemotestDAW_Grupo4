function manejarEnvioFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById("campoNombreContacto").value;
  var mail = document.getElementById("campoMail").value;
  var mensaje = document.getElementById("campoMensaje").value;

  var nombreValido = validarNombreContacto(nombre);
  var mailValido = validarMail(mail);
  var mensajeValido = validarMensaje(mensaje);

  if (nombreValido) {
    ocultarError("errorNombreContacto");
  } else {
    mostrarError("errorNombreContacto", "El nombre debe ser alfanumérico.");
  }

  if (mailValido) {
    ocultarError("errorMail");
  } else {
    mostrarError("errorMail", "Ingresá un mail válido.");
  }

  if (mensajeValido) {
    ocultarError("errorMensaje");
  } else {
    mostrarError("errorMensaje", "El mensaje debe tener más de 5 caracteres.");
  }

  if (nombreValido && mailValido && mensajeValido) {
    enviarPorMail(nombre, mail, mensaje);
  }
}

function enviarPorMail(nombre, mail, mensaje) {
  var asunto = "Contacto desde Memotest Mundial 2026";
  var cuerpo = "Nombre: " + nombre + "\nMail: " + mail + "\nMensaje: " + mensaje;
  var enlace = "mailto:contacto@memotest-mundial.com?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
  window.location.href = enlace;
}

function inicializarContacto() {
  document.getElementById("formularioContacto").addEventListener("submit", manejarEnvioFormulario);
}

document.addEventListener("DOMContentLoaded", inicializarContacto);