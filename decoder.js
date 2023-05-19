 // Referenciando as caixas de entrada e saída de texto
const textArea = document.querySelector(".texto-entrada");
const textoSaida = document.querySelector(".texto-saida");

//referenciando a div com a saída de texto e o botão copiar
const campoMensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    if(textoEncriptado.length<1){
        alert("Digite o texto a ser criptografado");
    }else{
        textoSaida.value = textoEncriptado;
        mostraMensagem();
        textArea.value = "";
    }
}

function btnDecriptar(){
    const textoEncriptado = decriptar(textArea.value);
    if(textoEncriptado.length<1){
        alert("Digite o texto a ser descriptografado");
    }else{
        textoSaida.value = textoEncriptado;
        mostraMensagem();
        textArea.value = "";
    }
}


function btnCopiar(){
    const textoCopiado = document.getElementById("texto-saida");
    if(textoCopiado.value == ""){
        alert("Não há mensagem a ser copiada");
    }else{
        textoCopiado.select();
        document.execCommand("copy");
        alert("Texto copiado para a área de transferência");
        ocultaMensagem();
        textoSaida.value = "";
    }
}

// REGRAS DA CRIPTOGRAFIA
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function decriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][1])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringEncriptada; 
}

function mostraMensagem(){
    campoMensagem.style.display = "block";
}

function ocultaMensagem(){
    campoMensagem.style.display = "none";
}