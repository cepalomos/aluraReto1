let textoBase = document.querySelector("#areaPrincipal");
let textoEncriptado = document.querySelector("#areaResultado");
let btnEncriptar = document.querySelector("#encriptar");
let btnDesencriptar = document.querySelector("#desencriptar");
let btnCopiar = document.querySelector("copiar");

let numeros = "0123456789";

btnEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let frase = textoBase.value;
  if (frase.match(/[^a-z\s]/) || frase.match(numeros)) {
    alert("No puedes pasar numeros, letras mayusculas, ni letras con acentos");
    textoBase.value = "";
  } else {
    frase = frase.replaceAll("e", "enter");
    frase = frase.replaceAll("i", "imes");
    frase = frase.replaceAll("o", "ober");
    frase = frase.replaceAll("a", "ai");
    frase = frase.replaceAll("u", "ufat");

    textoEncriptado.value = frase;
    textoBase.value = "";
  }
});

btnDesencriptar.addEventListener('click', (e)=>{
  e.preventDefault();
  let frase = textoBase.value;
  if (frase.match(/[^a-z\s]/) || frase.match(numeros)) {
    alert("No puedes pasar numeros, letras mayusculas, ni letras con acentos");
    textoBase.value = "";
  } else {
    frase = frase.replaceAll("enter", "e");
    frase = frase.replaceAll("imes", "i");
    frase = frase.replaceAll("ober", "o");
    frase = frase.replaceAll("ai", "a");
    frase = frase.replaceAll("ufat", "u");
    textoEncriptado.value = frase;
    textoBase.value = "";
  }
})