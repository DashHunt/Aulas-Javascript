//Factory Simples
function CriarPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome
    }
}

const nome = 'Arthur'
const sobrenome = 'Coutinho'

console.log(CriarPessoa(nome, sobrenome))