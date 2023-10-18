//reduce - reduzir o array em um único resultado (retorna apenas um valor)

// = atribuição
// == relacional / comparação  (valor)
// === identico  (valor e tipo de dado)

const numeros = [1,2,5,10,300]

const soma = numeros.reduce((vlInicial, n) => {
    return vlInicial + n
},0)

console.log(soma);

// const frutas = ["maça", "banana", "laranja"]

// const adiciona = frutas.reduce((vlInicial, f) => {
//     return vlInicial + f
// }, "Fruta :")

// console.log(adiciona);