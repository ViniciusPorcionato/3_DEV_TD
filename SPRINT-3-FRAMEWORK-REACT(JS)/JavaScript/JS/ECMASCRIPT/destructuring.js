//destructuring - tirar informações precisas

const camisaLacoste = {
    descricao : "Camisa Lacoste",
    preco : 399.98,
    marca : "Lacoste",
    tamanho : "G",
    cor : "Preto",
    promo : true
}

//desestruturando do objeto
const {descricao, preco, promo} = camisaLacoste;


console.log(`
    Produto: ${descricao}
    Preço : R$ ${preco}
    Promoção : ${promo == true ? "Sim" : "Não"}
`);//utilizando if ternário


// =======================================================================================================================================


const evento = {
    dataEvento : new Date(),
    descricaoEvento: "Evento sobre destructuring no JavaScript",
    titulo: "JavaScript - FrontEnd",
    presencaEvento : true,
    comentarioEvento : "Aula dinâmica sobre destructuring no JavaScript" 
}

const {titulo, descricaoEvento, dataEvento, presencaEvento, comentarioEvento} = evento;

console.log(`
Titulo Evento : ${titulo}
Descrição Evento : ${descricaoEvento}
Data Evento ${dataEvento}
Presença: ${presencaEvento == true ? "Confirmado" : "Não confirmado"}
Comentário : ${comentarioEvento}

`);