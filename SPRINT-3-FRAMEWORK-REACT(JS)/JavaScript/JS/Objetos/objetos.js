let eduardo = {
    nome: "Eduardo",
    idade: 41,
    altura: 1.67,
}
eduardo.peso = 89;
console.log(eduardo);

let carlos = new Object();

carlos.nome = "Carlos";
carlos.idade = 36;
carlos.sobrenome = "Roque";

console.log(carlos);

let pessoas = [];

pessoas.push(eduardo);
pessoas.push(carlos);

pessoas.forEach((pessoa, index) => {
    console.log(`\nPessoa ${index + 1}: ${pessoa.nome}`);
    Object.keys(pessoa).forEach((key) => console.log(`${key}: ${pessoa[key]}`))
})