//Exemplos de funções

//Função padrão
let dobro = function(a){
    return 2 * a 
}

//Função arrow com parametro e return
dobro = (a) => {
    return 2 * a 
}

//Função arrow de forma mais compacta
dobro = a => 2 * a 

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //Possui parametro

console.log(ola())