const pessoa = {
    nome: 'Rebeca',
    idade: 2, 
    peso: 13
}

//Funções para objetos
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//Funciona quase igual um freeze
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

//Não será possivel reatribuir o valor se 'writable = false'
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))

//Concatenação de objetos (Object.assign) ECMAScript 2015
const dest = { a:1 }
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) 

//Ele considerará o ultimo registro se os elementos forem repetidos
console.log(obj)