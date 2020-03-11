function validateForm() {

    let nome = document.getElementById('nome-contato').value;
    let email = document.getElementById('email-contato').value;
    let tel = document.getElementById('tel-contato').value;
    let msg = document.getElementById('msg-contato').value;

    let valida = 0;

    if (nome.length < 1) {
        document.getElementById("alert-name").innerHTML = "Preencha o nome!";
        document.getElementById("alert-name").style.visibility = "visible";
        valida = 0;
    } else {
        document.getElementById("alert-name").style.visibility = "hidden";
        valida++;
    }

    if (email.length < 1) {
        document.getElementById("alert-email").innerHTML = "Preencha o email!";
        document.getElementById("alert-email").style.visibility = "visible";
        valida = 0;

    } else if (email.includes('@')) {
        let terminacoes = [".com", ".co", ".org", ".net", ".br"];
        let tem = false;
        for (let i = 0; i < terminacoes.length; i++) {
            if (email.endsWith(terminacoes[i])) {
                tem = true;
            }
        }

        if (tem) {
            document.getElementById("alert-email").style.visibility = "hidden";
            valida++;
        } else {
            document.getElementById("alert-email").innerHTML = "É uma terminação de email inválida!";
            document.getElementById("alert-email").style.visibility = "visible";
            valida = 0;
        }
    } else {
        document.getElementById("alert-email").innerHTML = "É um email inválido!";
        document.getElementById("alert-email").style.visibility = "visible";
        valida = 0;
    }

    if (msg.length < 1) {
        document.getElementById("alert-msg").innerHTML = "Mensagem inválida!";
        document.getElementById("alert-msg").style.visibility = "visible";
        valida = 0;
    } else {
        document.getElementById("alert-msg").style.visibility = "hidden";
        valida++;
    }

    if (valida === 3) {
        document.getElementById("alert-enviar").innerHTML = "Enviado com Sucesso!";
        document.getElementById("alert-enviar").style.visibility = "visible";
    } else {
        document.getElementById("alert-enviar").style.visibility = "hidden";
    }

}

document.getElementById('btn-enviar-contato').addEventListener('click', () => {

    validateForm();
});