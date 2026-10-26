// Variables
const nombre = "malvin";
let numero = 3;
let paginaOscura = true;

// Selectores
const button = document.querySelector("#modo");
const formulario = document.querySelector("#formulario");
const campoNombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const aviso = document.querySelector("#aviso");

// Funciones
function cambiarModo() {
  if (paginaOscura === true) {
    document.body.classList.add("modo-claro");
    paginaOscura = false;
  } else {
    document.body.classList.remove("modo-claro");
    paginaOscura = true;
  }
}
function validarFormulario(evento) {
  evento.preventDefault();

  const valorNombre = campoNombre.value;
  const valorEmail = email.value;
  const valorMensaje = mensaje.value;

  if (valorNombre === "" || valorEmail === "" || valorMensaje === "") {
    aviso.textContent = "Por favor, completa todos los campos.";
  } else {
    aviso.textContent = "Formulario completado correctamente.";
  }
}

// Eventos
button.addEventListener("click", function () {
  cambiarModo();
});
formulario.addEventListener("submit", validarFormulario);

// Comprobaciones
