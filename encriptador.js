// Declarar constantes
const inputText = document.getElementById("input-text");
const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const copyButton = document.getElementById("copy-button");
const finalMessage = document.getElementById("output-text");
const image = document.getElementById("image");
const info = document.getElementById("info");
const presentation = document.getElementById("presentacion");

// Llaves de encriptacion
let keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

// Funcion para mostrar el texto encriptado/desencriptado
const result = (newValue) => {
    finalMessage.innerHTML = newValue;

    image.style.display = "none";
    inputText.value = "";
    info.style.display = "none";
    copyButton.style.display = "block";
    presentation.classList.add("ajustar");
    finalMessage.classList.add("ajustar");
}

// Funcion para encriptar el texto
encryptButton.addEventListener("click", () => {
    const text = inputText.value.toLowerCase()
    if (text != "") {
    function encrypt(newText) {
        for (let i = 0; i < keys.length; i++){
            if(newText.includes(keys[i][0])){
                newText = newText.replaceAll(keys[i][0], keys[i][1]);
            };
        };
        return newText;
    }
    result(encrypt(text));
} else {
    alert("Ingrese un texto para encriptarlo")
}
})

// Funcion para desencriptar el texto
decryptButton.addEventListener("click", () => {
    const text = inputText.value.toLowerCase()
    if (text != "") {
    function decrypt(newText) {
        for (let i = 0; i < keys.length; i++){
            if(newText.includes(keys[i][1])){
                newText = newText.replaceAll(keys[i][1], keys[i][0]);
            };
        };
        return newText;
    }
    result(decrypt(text));
} else {
    alert("Ingrese un texto para desencriptarlo")
}
})

copyButton.addEventListener("click", () => {
    let text = finalMessage;
    text.select();
    document.execCommand("copy")
    alert("Texto copiado");

    finalMessage.innerHTML = "";
    image.style.display = "block";
    info.style.display = "block";
    copyButton.style.display = "none";
    presentation.classList.remove("ajustar");
    finalMessage.classList.remove("ajustar");
    inputText.focus();
})

