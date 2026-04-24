const senhaDigitada = document.getElementById('senhadigitada');
let senhaCorreta = "vini123";
const erro = document.getElementById('erro');
const label = document.getElementById('nome_senha')

function validarSenha() {
    if(senhaDigitada.value === senhaCorreta) {
        window.location.href = "http://127.0.0.1:5500/home.html";
    } else {
        erro.innerText = "Senha inválida";
        erro.style.color = "red"
        senhaDigitada.style.border = "2px solid red"
        label.style.color = "red"
    }
}