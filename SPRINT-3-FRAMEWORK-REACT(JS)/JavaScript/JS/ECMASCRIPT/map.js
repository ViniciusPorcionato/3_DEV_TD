//foreach - retorna um void
//map - retorna um array modificado

//função de retorno = Callback

const numeros = [1,2,5,10,300];

const dobro = numeros.map((n) => {
    return n * 2
});

console.log(numeros);
console.log(dobro);