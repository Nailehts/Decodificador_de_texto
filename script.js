var input = document.querySelector("#input-padrao");
var textarea = document.querySelector("#text-area");

function criptografar() {
    var ingreseTexto = input.value;

    var resultadoCripto = ingreseTexto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('text-area').innerHTML = resultadoCripto.toLowerCase();
}   

function descriptografar() {
    var ingreseTexto = input.value;

    var resultadoDescripto = ingreseTexto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById('text-area').innerHTML = resultadoDescripto
}

function copiar() {
    var textoCop = document.getElementById("text-area")
    
    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado!");

}

document.querySelector(".criptografar").addEventListener('click', function(){
    let hideImage = document.getElementById("dibujo");
    let mensagemNaoEncontrada = document.getElementById("msg-no-encontrada");
    let criptoDescripto = document.getElementById("cripto-descripto");
    hideImage.style.display = 'none';
    mensagemNaoEncontrada.style.display = 'none';
    criptoDescripto.style.display = 'none';
},false);
 
function test(v) {
    document.getElementById('input-padrao').value = v.value.toLowerCase();
}


