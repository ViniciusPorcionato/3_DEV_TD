
function calcular() {
    event.preventDefault()

    let numero1 = parseFloat(window.document.getElementById("numero1").value);
    let numero2 = parseFloat(window.document.getElementById("numero2").value);
    let resultado;
    let operacao = window.document.getElementById("operacao").value;

    if(isNaN(numero1) || isNaN(numero2)){
        alert("Preencha todos os campos !")
        return;
    }
    
    switch (operacao) {
        case '+':
        resultado = somar(numero1, numero2)
        console.log(`Resultado : ${resultado}`);
            break;
        
        case '-':
        resultado = subtrair(numero1, numero2)
        console.log(`Resultado : ${resultado}`);
        break;

        case '*':
        resultado = multiplicar(numero1, numero2)
        console.log(`Resultado : ${resultado}`);
        break;

        case '/':
        resultado = dividir(numero1, numero2)
        console.log(`Resultado : ${resultado}`);
        break;
    
        default:
            console.log(Error);
            break;
    }

    window.document.getElementById('resultado').innerText = resultado;

}

function somar(x , y) {
    return (x + y).toFixed(2);
}

function subtrair(x , y) {
    return (x - y).toFixed(2);
}

function multiplicar(x , y) {
    return (x * y).toFixed(2);
}

function dividir(x , y) {
    if (y == 0) {
        return "Impos. dividir por 0!";
    }
    return (x / y).toFixed(2);
}