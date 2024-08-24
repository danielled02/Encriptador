document.addEventListener("DOMContentLoaded", function () {
    // Seletores
    const textoEntrada = document.querySelector("#textoEntrada");
    const botaoCriptografar = document.querySelector("#botaoCriptografar");
    const botaoDescriptografar = document.querySelector("#botaoDescriptografar");
    const textoSaida = document.querySelector("#textoSaida");
    const mensagemValidacao = document.querySelector("#mensagemValidacao");

    // Função para validar o texto (sem letras maiúsculas e caracteres especiais)
    function textoValido(texto) {
        const regex = /^[a-z0-9\s]+$/; // Aceita apenas letras minúsculas, números e espaços
        return regex.test(texto);
    }

    // Função de criptografia (usando tabela UNICODE)
    function criptografarTexto(texto) {
        return texto.split('').map(caractere => {
            return String.fromCharCode(caractere.charCodeAt(0) + 1); // Desloca cada caractere para o próximo na tabela UNICODE
        }).join('');
    }

    // Função de descriptografia (usando tabela UNICODE)
    function descriptografarTexto(texto) {
        return texto.split('').map(caractere => {
            return String.fromCharCode(caractere.charCodeAt(0) - 1); // Desloca cada caractere para o anterior na tabela UNICODE
        }).join('');
    }

    // Evento de clique para o botão de criptografia
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

    // Evento de clique para o botão de descriptografia
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
