const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1+1}`) // crase

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

/*
O template string é marcado por crase. Caso seja necessário 
utilizar expressão dentro do template é utilizado o ${} para tall
ação
*/