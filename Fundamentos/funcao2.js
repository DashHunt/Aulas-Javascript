//Armazenando funcao em variavel
const ImprimirSoma = function(a, b){
    console.log(a + b)
}

ImprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

//Retorno implicito
const subtração = (a, b) => a - b
console.log(subtração(5,3))