//filter - retorna um array(modificado) apenas com elementos que atenderam a uma condição

//função de retorno = Callback

const numeros = [1,2,5,10,300];

const maior10 = numeros.filter((e) => {
    return e >= 10;
});

console.log(maior10);


const comentarios = [
    {comentario : "bom evento", exibe: true},
    {comentario : "evento foi uma merda", exibe: false},
    {comentario : "Ótimo evento !", exibe: true},
]

const comentariosOk = comentarios.filter((c) => {
    return c.exibe == true;
    // return c.exibe;
})

comentariosOk.forEach( (c) => {
    console.log(c.comentario);
} );