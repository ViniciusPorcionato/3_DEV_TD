let vinicius = {
    //propriedade : valor
    nome : "Vinicius",
    idade : "18",
    altura : "1.80"
};//objeto literal


let vitor = new Object();
vitor.nome = "Vitor";
vitor.idade = "18";
vitor.altura = "1.80";

console.log(vinicius);
console.log(vitor);


//orientação a objeto
const sacola = new Object();
sacola.itens = []; //lista/array

sacola.guardarItem = function (item) { //metodo
    this.itens.push(item);
}

sacola.guardarItem("Laranja");

console.log(sacola.itens);