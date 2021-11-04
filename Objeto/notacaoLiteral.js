const a = 1
const b = 2
const c = 3

//Forma antiga
const obj = {a: a, b: b, c: c}
//Forma reduzida
const obj2 = {a, b, c}
console.log(obj)
console.log(obj2)

//Atribuindo valores de variaveis para dentro de objetos
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//Formas de criar funções dentro de objetos
const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2(){
        //...
    }
}

console.log(obj5)