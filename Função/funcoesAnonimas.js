const soma = function (x, y){
    return x + y
}

//Passando função como parametro de outra função e definindo valor padrão
const ImprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

ImprimirResultado(3, 4)
ImprimirResultado(3, 4, soma)

//Criando uma função anonima dentro da chamada
ImprimirResultado(3, 4, function(x, y){
    return x - y
})
ImprimirResultado(3, 4, (x, y) => (x * y))

//Função anonima dentro de um objeto
const pessoa = {
    falar: function() { //Ou pode ser falar()
        console.log('Opa')
    }
}

pessoa.falar()