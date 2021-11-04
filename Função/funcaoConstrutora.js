//Funções construtoras
function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo privado
    let velocidadeAtual = 0

    //Metodo publico
    this.acelerar = function(){
        if(velocidadeAtual < velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

//Objetos criados
//Instancias de objetos
const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
