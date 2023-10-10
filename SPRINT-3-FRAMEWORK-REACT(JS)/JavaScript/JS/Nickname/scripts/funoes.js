function mostrarNickname() {
    event.preventDefault();

    let nickname = window.document.getElementById("nickname").value;

    window.document.getElementById("mostrar-nickname").innerText = nickname;

 
}