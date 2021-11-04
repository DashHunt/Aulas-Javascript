//Notação ponto de objeto
console.log(Math.ceil(6,1))

const obj = {}
obj.nome = 'Bola'

console.log(obj.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec....')
    }
}

//Instanciando objeto
const obj2 = new Obj('Arthur')
const obj3 = new Obj('Mesa')

//Printando objetos instanciados
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()