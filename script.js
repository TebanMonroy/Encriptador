const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(encriptado) {
  let codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  encriptado = encriptado.toLowerCase();

  for (var i = 0; i < codigo.length; i++) {
    if (encriptado.includes(codigo[i][0])) {
      encriptado = encriptado.replaceAll(codigo[i][0], codigo[i][1]);
    }
  }
  return encriptado;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function desencriptar(desencriptado) {
  let codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  desencriptado = desencriptado.toLowerCase();

  for (var i = 0; i < codigo.length; i++) {
    if (desencriptado.includes(codigo[i][1])) {
      desencriptado = desencriptado.replaceAll(codigo[i][1], codigo[i][0]);
    }
  }
  return desencriptado;
}

const btnCopiar = document.querySelector(".copiar");
const textoCopiado = document.querySelector(".mensaje");

btnCopiar.addEventListener("click", () => {
  navigator.clipboard
    .writeText(textoCopiado.value)
    .then(() => {
      alert("¡Texto copiado con éxito!");
    })
    .catch((error) => {
      alert.error("Error al copiar el texto", error);
    });
});
