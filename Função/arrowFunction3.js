//Função padrão
let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

//Binding com função normal
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//Função arrow
let ComparaComThisArrow = param => console.log(this === param)
ComparaComThisArrow(global)
ComparaComThisArrow(module.exports)

//Bind com arrow function
ComparaComThisArrow = ComparaComThisArrow.bind(obj)
ComparaComThisArrow(obj)
ComparaComThisArrow(module.exports)