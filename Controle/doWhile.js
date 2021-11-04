function getRandomInteiro(min, max){
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

let option

do{
    option = getRandomInteiro(-1 ,10)
    console.log(`Opção escolhida foi ${option}`)
}while(option != - 1)