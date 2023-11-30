function verificarNome() {
    var nomeInput = document.getElementById("nome");
    var nome = nomeInput.value;

    if (nome.split(' ').length < 2) {
        document.getElementById("erro").innerText = "Por favor, insira o nome completo.";

        nomeInput.classList.add("error-input");
    } else {
        document.getElementById("erro").innerText = "";
        nomeInput.classList.remove("error-input");

    }
}

function enviarFormulario() {
    document.getElementById("mensagemSucesso").innerText = "Formulário enviado com sucesso!";
}

$(document).ready(function(){
            $('#telefone').mask('(00) 00000-0000');
        });