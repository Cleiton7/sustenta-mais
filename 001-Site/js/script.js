function validateForm() {

    let nome = document.getElementById('nome-contato').value;
    let email = document.getElementById('email-contato').value;
    let telefone = document.getElementById('tel-contato').value;
    let mensagem = document.getElementById('msg-contato').value;


    if (nome.length < 1) {
        document.getElementById("alert-name").innerHTML = "Preencha o Nome!";
        document.getElementById("alert-name").style.visibility = "visible";
    } else {
        document.getElementById("alert-name").style.visibility = "hidden";
    }

    if (email.length < 1) {
        document.getElementById("alert-email").innerHTML = "Preencha o Email!";
        document.getElementById("alert-email").style.visibility = "visible";

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
        } else {
            document.getElementById("alert-email").innerHTML = "Invalid input field. Termination of invalid Email!";
            document.getElementById("alert-email").style.visibility = "visible";
        }
    } else {
        document.getElementById("alert-email").innerHTML = "Invalid input field. Email Invalid!";
        document.getElementById("alert-email").style.visibility = "visible";
    }



}








document.getElementById('btn-enviar-contato').addEventListener('click', () => {

    validateForm();
});