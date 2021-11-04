//Coleção dinamica de pares chave/valor
const produto = new Object

produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Generica'
produto.preco = 200

console.log(produto)
delete produto.preco
delete produto['Marca do Produto']

console.log(produto)

//Objeto estatico
const carro ={
    modelo: 'A4',
    valor: 89000, 
    proprietario: {
        nome: 'Arthur', 
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    }, 
    condutores: [{
        nome: 'Junior', 
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }], 

    calcularValorSeguro: function(){
        //Conteudo da função
    }
}

//Utilização de objetos
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) //Ao utilizar funções dentro de objetos não definidos gera-se erro