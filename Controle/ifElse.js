const ImprimirResultado = function(nota) {
    if (typeof nota == 'string'){
        console.log('é string')
    }

    if (nota >=7){
        console.log('Aprovado!')
    }else {
        console.log('Reprovado!')
    }
}

ImprimirResultado(10)
ImprimirResultado(4)
ImprimirResultado('Epa') //Cuidado com linguagem fracamente tipada