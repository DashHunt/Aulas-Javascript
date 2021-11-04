//Exercicio
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

// 1. Transformar classe em função construtora

function CriadorPessoa(nome){

    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }

}

const saudacao = new CriadorPessoa('Joao')
saudacao.falar()