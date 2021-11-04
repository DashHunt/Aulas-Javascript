//Object.preventExtensions
const obj = Object.preventExtensions({
    nome: 'Arthur',
    idade: 20
})
console.log('Extensível:', Object.isExtensible(obj))

//Object.seal
const pessoa = {nome: 'Julia', idade: 20}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

//Object.freeza = Object.seal + valores constantes