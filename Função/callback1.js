const fabricante = ['Mercedes', 'Audi', 'BMW' ]

function Imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

//Função de call back
fabricante.forEach(Imprimir)

fabricante.forEach(function(a){
    console.log(a)
})

//Função de callback com arrow
fabricante.forEach(fabricante => console.log(fabricante))