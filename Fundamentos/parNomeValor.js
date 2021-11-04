// par nome/valor
const saudacao = 'Opa' //contexo lexico 1

function exec(){
    const saudacao = 'Falaaa' //context lexico 2
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Rondonia', 
        numero: 123 
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)