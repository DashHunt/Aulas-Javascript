//Endereço de memoria
//pessoa -> 123 -> {...}
const pessoa = {nome : 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//Mudanã de endereço de memoria: 
//pessoa -> 456 -> {...}
//pessoa = {nome : 'Ana'} *gera erro*

Object.freeze(pessoa)

//Não pode alterar nada dentro do objeto apos o freeze (congelar)
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Ana'
console.log(pessoaConstante)