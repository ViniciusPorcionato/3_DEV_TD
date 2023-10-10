function cadastrar() {
    event.preventDefault()

    let nome = window.document.getElementById("nome").value;
    let nickname = window.document.getElementById("nickname").value;

    let Nickname;

    if(isNaN(nome) || isNaN(nickname)){
        alert("Preencha todos os campos !")
        return;
    }

    window.document.getElementById('Nickname').innerText = Nickname;
}