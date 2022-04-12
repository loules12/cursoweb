function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10    
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {  // sempre será executado, com ou sem erro.
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)