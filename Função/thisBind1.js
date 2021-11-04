const pessoa = {
    saudacao: 'Bom dia',
    nome: 'Arthur!',
    falar(){
        console.log(this.saudacao, this.nome) //This se refere ao objeto "pessoa"
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //Conflito entre paradigmas: funcional e OO

//Utilizando o bind para referenciar o objeto this
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()