//Utilizando o this com funções arrow
function Pessoa() {
    this.idade = 0 

    //Não há necessidade de um binding
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa