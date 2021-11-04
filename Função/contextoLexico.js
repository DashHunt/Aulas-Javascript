const valor = 'Global'

function MinhaFuncao() {
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    MinhaFuncao();
}

exec();