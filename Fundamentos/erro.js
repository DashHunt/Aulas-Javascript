function tratarErro(erro){
    throw{
        nome: erro.name, 
        msg: erro.message,
        date: new Date
    }
}

function ImprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!!!')
    }catch(e){
        tratarErro(e)
    }finally{
        console.log('final')
    }
}

const obj = {nome: 'Arthur'}
ImprimirNomeGritado(obj)