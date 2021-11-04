console.log("---------------------------------")
console.log("          ORIGENS")
console.log("---------------------------------")

console.log("Codigo     Nome          Valor")
console.log("OA     Ribeirao Preto    150.00")
console.log("OB        Franca         500.00")
console.log("OC      Sao Paulo        700.00")
console.log("OH     Belo Horizon      1200.00")
console.log("---------------------------------")

console.log("") //Quebra de linha

console.log("---------------------------------")
console.log("          DESTINOS")
console.log("---------------------------------")

console.log("Codigo     Nome            Valor")
console.log("OA      Afeganistão        0.50")
console.log("OB    Fernando Noronha     15000.00")
console.log("OC     Porto Galinhas      2500.00")
console.log("OH      Sertãozinho        50.00")
console.log("---------------------------------")

var readline = require('readline')
var resp = ""

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question = ("Selecione sua origem:", function(answer){
    var origem = answer
    leitor.close()
})

switch(origem){
    case 'Ribeirao Preto': 
        var valorOrigem = 150
        break
    case 'Franca': 
        var valorOrigem = 500
        break
    case 'Sao Paulo': 
        var valorOrigem = 700
        break
    case 'Belo Horizon' || 'Belo Horizonte': 
        var valorOrigem = 1200
        break
}

leitor.question = ("Selecione seu destino:", function(answer){
    destino = answer
    leitor.close()
})

switch(destino){
    case 'Afeganistao' || 'Afeganistão': 
        var ValorDestino = 150
        break
    case 'Fernando Noronha' || 'Noronha': 
        var ValorDestino = 500
        break
    case 'Porto Galinhas': 
        var ValorDestino = 700
        break
    case 'Sertãozinho': 
        var ValorDestino = 1200
        break
}

leitor.question = ("Insira quantidade de viajantes:", function(answer){
    quantidadeViajantes = answer
    leitor.close()
})

leitor.question = ("Insira a quantidade de dias:", function(answer){
    QuantidadeDias = answer
    leitor.close()
})

switch(QuantidadeDias){
    case 1: case 2:  
        dias = 5/100
        break
    case 3: case 4: case 5:
        dias = 6/100
        break
    case 6: case 7: case 8: case 9: case 10:  
        dias = 15/100
        break
    default: 
        dias = 18/100
        break
}

var subTotalViagem = ((origem + destino) * quantidadeViajantes) + dias

console.log("---------------------------------")
console.log("        FORMA DE PAGAMENTO")
console.log("---------------------------------")

console.log("1 - A vista")
console.log("2 - A prazo")
console.log("---------------------------------")

leitor.question = ("Selecione a forma de pagamento:", function(answer){
    formaDePagamento = answer
    leitor.close()
})

if (formaDePagamento = 1 || formaDePagamento == 'A vista')
{   
    formaDePagamento = 'A vista'
    desconto = 10/100
    var totalViagem = subTotalViagem - desconto
}

console.log('CONFIGURAÇÃO')
console.log("---------------------------------")
console.log(`Origem: ${origem}, ${valorOrigem}`)
console.log(`Destino: ${destino}, ${ValorDestino}`)
console.log(`Viajantes: ${quantidadeViajantes}`)
console.log(`Dias: ${dias}`)
console.log(`Forma de pagamento: ${formaDePagamento}`)

console.log("") //Quebra de linha

console.log('EXTRATO')
console.log("---------------------------------")
console.log(`Viagem.........: ${subTotalViagem}`)
console.log(`Destino........: ${QuantidadeDias}`)
console.log(`Viajantes......: ${subTotalViagem + quantidadeDias}`)
console.log(`Desconto.......: ${subTotalViagem - totalViagem}`)
console.log(`TOTAL FACADA...: ${totalViagem}`)
