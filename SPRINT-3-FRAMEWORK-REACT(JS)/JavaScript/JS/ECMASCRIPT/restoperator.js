//rest operator - pega a propriedade desejada dentro do objeto e deixa o resto das propriedades do objeto 


const evento = {
    dataEvento : new Date(),
    descricaoEvento: "Evento sobre destructuring no JavaScript",
    titulo: "JavaScript - FrontEnd",
    presencaEvento : true,
    comentarioEvento : "Aula dinâmica sobre rest operator no JavaScript" 
}

const {titulo, descricaoEvento, dataEvento, ...resto} = evento;

console.log(titulo);
console.log(descricaoEvento);
console.log(dataEvento);
console.log(resto);
