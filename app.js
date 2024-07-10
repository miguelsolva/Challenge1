function encriptar(){
    const texto = document.getElementById("texto").value;
    const caja1 = document.getElementById("caja1");
    const caja2 = document.getElementById("caja2");
    const imagenMuñeco = document.getElementById("imagenMuñeco");

    const textoCifrado = texto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/o/gi, "ober")
                            .replace(/a/gi, "ai")
                            .replace(/u/gi, "ufat");

    if(texto.length != 0 && /^[a-z\s]+$/.test(texto)) {
        document.getElementById("texto").value = textoCifrado;
        caja1.textContent = "Texto encriptado con Éxito";
        caja2.textContent = "";
        caja3.textContent = textoCifrado;
        imagenMuñeco.style.display = "none"; 
        caja2.style.display = "none";
    }
    else{
        imagenMuñeco.src = "imagenes/Muñeco.png";
        caja1.textContent = "Ningún texto encontrado para encriptar";
        caja2.textContent = "Ingresa el texto a encriptar o desencriptar";
        alert("¡Oops! Solo minúsculas y espacios,sin mayúsculas ni símbolos especiales, por favor. 🅰️🔤");
    }
}

function desencriptar(){;

const texto = document.getElementById("texto").value;
const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const imagenMuñeco = document.getElementById("imagenMuñeco");

const textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ober/gi, "o")
                        .replace(/ai/gi, "a")
                        .replace(/ufat/gi, "u");

    if(texto.length != 0 && /^[a-z\s]+$/.test(texto)) {
        document.getElementById("texto").value =textoCifrado;
        caja1.textContent = "Texto desencriptado con Éxito";
        caja2.textContent = "";
        caja3.textContent = textoCifrado;
        imagenMuñeco.style.display = "none"; 
        caja2.style.display = "none";
    } else {
        imagenMuñeco.src = "imagenes/Muñeco.png";
        caja1.textContent = "Ningún texto encontrado para encriptar";
        caja2.textContent = "Ingresa el texto a encriptar o desencriptar";
        alert("¡Oops! Solo minúsculas y espacios,sin mayúsculas ni símbolos especiales, por favor. 🅰️🔤");
    }
}
function botonCopiar() {
    let copyText = document.getElementById("texto");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    texto.value = "";
    caja1.textContent = "¡Texto copiado en el Portapapeles!";
}