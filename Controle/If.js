function soBoaNoticia(nota){
    if (nota >= 7) {
        if (nota >= 9){
            console.log('Aprovado com ' + nota)
            console.log('PARABENS')
        }else{
            console.log('Aprovado com ' + nota)
        }
        
    }
}

soBoaNoticia(7)
soBoaNoticia(9)

function seForVerdadeEuFalo(valor){
    if(valor) {
        console.log('É verdade ' + valor)
    }
}

seForVerdadeEuFalo(7)
seForVerdadeEuFalo(10)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])