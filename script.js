document.addEventListener("DOMContentLoaded", function () {
    
    const textoEntrada = document.querySelector("#textoEntrada");
    const botaoCriptografar = document.querySelector("#botaoCriptografar");
    const botaoDescriptografar = document.querySelector("#botaoDescriptografar");
    const textoSaida = document.querySelector("#textoSaida");
    const mensagemValidacao = document.querySelector("#mensagemValidacao");

    
    function textoValido(texto) {
        const regex = /^[a-z0-9\s]+$/; 
        return regex.test(texto);
    }


    function criptografarTexto(texto) {
        return texto.split('').map(caractere => {
            return String.fromCharCode(caractere.charCodeAt(0) + 1); 
        }).join('');
    }

   
    function descriptografarTexto(texto) {
        return texto.split('').map(caractere => {
            return String.fromCharCode(caractere.charCodeAt(0) - 1); 
        }).join('');
    }

   
    botaoCriptografar.addEventListener("click", function () {
        const texto = textoEntrada.value;

        if (textoValido(texto)) {
            mensagemValidacao.style.display = "none";
            textoSaida.textContent = criptografarTexto(texto);
            textoSaida.style.display = "block";
        } else {
            mensagemValidacao.style.display = "block";
            textoSaida.style.display = "none";
        }
    });

    
    botaoDescriptografar.addEventListener("click", function () {
        const texto = textoEntrada.value;

        if (textoValido(texto)) {
            mensagemValidacao.style.display = "none";
            textoSaida.textContent = descriptografarTexto(texto);
            textoSaida.style.display = "block";
        } else {
            mensagemValidacao.style.display = "block";
            textoSaida.style.display = "none";
        }
    });
});
