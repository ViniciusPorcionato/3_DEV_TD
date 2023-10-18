//Função anonima
const somar = function(x, y) {
    return x + y;
}
console.log(somar(50,10));

//Arrow function
const subtrair = (x, y) => {
    return (x - y);
}
console.log(subtrair(50,10));

//Arrow function se tiver um parametro pode omitir os parenteses
// const dobro = (numero) => {
//     return numero * 2;
// }
// console.log(dobro(50));

const dobro = numero => {
    return numero * 2;
}
console.log(dobro(50));

//Arrow function se tiver uma linha de ação pode retirar o return
const metade = numero => numero / 2;
console.log(metade(50));


//Arrow function
const boaTarde = () => {console.log("Boa tarde !")};
boaTarde();


// =================================================================================================================================

const convidados = [
    {nome: "Carlos", idade: 36},
    {nome: "Vinicius", idade: 18},
    {nome: "Claiton", idade: 43},
    {nome: "Gustavo", idade: 17},
    {nome: "Eduardo", idade: 18},
    {nome: "Richard", idade: 18},
];

convidados.forEach( p => {
    console.log(`Convidado : ${p.nome}`)
});

//Callback :  uma função de programação que é passada como argumento para outra função.

